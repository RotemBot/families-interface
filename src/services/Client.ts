import Axios, { AxiosInstance } from 'axios'
import {injectable} from 'inversify'
import {Loggable} from '@/services/Loggable'
import {ContactRole, Gender} from '@/models'

export interface CreateFamilyPayload {
    name: string
    homeTown: string
    email: string
}

export interface CreateContactPayload {
    firstName: string
    lastName: string
    phone: string
    email?: string
    gender: Gender
    role: ContactRole
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
        try {
            const res = await this._axios.post('/families', payload)
            return res.data
        } catch (error) {
            this._logger.warn(`Error creating new family`, { error, payload })
        }
    }

    public async createContact (payload: CreateContactPayload, family: string) {
        try {
            const res = await this._axios.post(`/families/${family}/contacts`, payload)
            return res.data
        } catch (error) {
            this._logger.warn(`Error creating new family`, { error, payload })
        }
    }

    public async getFamilyByEmail (email: string) {
        try {
            const res = await this._axios.get(`/families/find?email=${email}`)
            return res.data
        } catch (error) {
            this._logger.warn(`No family found for given email`, { error, email })
        }
    }
}
