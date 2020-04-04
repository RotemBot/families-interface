import {UIContact} from '@/models'

export interface UIFamily {
    name: string
    homeTown: string
    email: string
    primaryContact: UIContact
    secondaryContact?: UIContact
    children?: string[]
}

export class UIFamily implements UIFamily {
    constructor(init: UIFamily) {
        Object.assign(this, init)
    }
}