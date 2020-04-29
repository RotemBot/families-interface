import {UIContact} from '@/models'

export interface UIFamily {
    id: string
    name: string
    homeTown: string
    email: string
    primaryContact: UIContact
    secondaryContact?: UIContact
    children?: string[]
}

export class UIFamily implements UIFamily {
    constructor (init: UIFamily) {
        Object.assign(this, init)
        if (!init.primaryContact.email || init.primaryContact.email.length === 0) {
            init.primaryContact.email = this.email
        }
        this.primaryContact = new UIContact(init.primaryContact)
        if (init.secondaryContact) {
            this.secondaryContact = new UIContact(init.secondaryContact)
        }
    }
}
