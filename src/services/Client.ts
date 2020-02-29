import Axios, { AxiosInstance } from 'axios'
import {injectable} from 'inversify'
import {Loggable} from '@/services/Loggable'

export interface CreateFamilyPayload {
    name: string
    homeTown: string
    email: string
}

@injectable()
export class Client extends Loggable {

    public static ERRORS = {
        LoginError: class LoginError extends Error {
            constructor (params: Dictionary<any>, error: any) {
                super('Failed to login' + JSON.stringify({ params, error: error.message, stack: error.stack }))
            }
        }
    }

    private _axios: AxiosInstance

    constructor (
    ) {
        super()
        // @ts-ignore - __SERVER_URL defined in vue.config.js
        const axiosConfig: Dictionary<string> = { baseURL: __SERVER_URL }
        this._axios = Axios.create(axiosConfig)
    }

    public async createNewFamily (payload: CreateFamilyPayload) {
        const res = await this._axios.post('/families', payload)
    }

    public async getFamilyByEmail (email: string) {
        try {
            const res = await this._axios.get(`/families/find/${email}`)
            debugger
        } catch (error) {
            this._logger.warn(`No family found for given email`, { error, email })
        }
    }
}
