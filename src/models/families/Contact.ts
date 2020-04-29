import {Gender} from './index'
import {SelectOption} from '@/models'
// @ts-ignore
import { hebDict } from '@/hebrew.js'

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
    constructor (init: UIContact) {
        Object.assign(this, init)
        // @ts-ignore
        this.phone = init.phoneNumber
    }
}

export function genderOptions (): SelectOption[] {
    return Object.values(Gender).map( gen => {
        return {
            label: getGenderDisplay(gen),
            value: gen
        }
    })
}

export function getGenderDisplay (gender: Gender) {
    const heb = hebDict.toJSON()
    switch (gender) {
        case Gender.FEMALE:
            return heb.female
        case Gender.MALE:
            return heb.male
    }
}
