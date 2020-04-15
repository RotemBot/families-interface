import {Gender} from './index'

export interface UIContact {
    firstName: string
    lastName: string
    phone: string
    email?: string
    gender: Gender,
    role: ContactRole
}

export enum ContactRole {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export class UIContact implements UIContact {
    constructor(init: UIContact) {
        Object.assign(this, init)
    }
}
