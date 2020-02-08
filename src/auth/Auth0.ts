import {Loggable} from '@/services'
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client'
import createAuth0Client from '@auth0/auth0-spa-js'
import config from './Auth0Config'

class Auth0 extends Loggable {

    private _client: Auth0Client | undefined
    public isAuthenticated: boolean = false

    constructor () {
        super()
    }

    public async auth0Client (): Promise<Auth0Client> {
        try {
            if (!this._client) {
                this._client = await createAuth0Client(config)
            }
            return this._client!
        } catch (error) {
            this._logger.error(`Error getting Auth0Client`, error)
            throw error
        }
    }

    public async login (): Promise<any> {
        try {
            const client = await this.auth0Client()
            await client.loginWithRedirect()
            debugger
            await client.handleRedirectCallback()
            this.isAuthenticated = true
            this._logger.debug(`Login successfull`)
            return await client.getUser()
        } catch (error) {
            this._logger.error(`Error logging in`, error)
        }
    }

    public async logout (): Promise<void> {
        try {
            const client = await this.auth0Client()
            await client.logout()
            this.isAuthenticated = false
            this._logger.debug(`Logout successfull`)
        } catch (error) {
            this._logger.error(`Error logging out`, error)
        }
    }
}

export const auth0 = new Auth0()
