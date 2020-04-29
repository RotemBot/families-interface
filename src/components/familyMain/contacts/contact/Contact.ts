import {BaseComponent, Component, Model, Prop} from '@/components/BaseComponent'
import {Gender, genderOptions, getGenderDisplay, SelectOption, UIContact} from '@/models'

@Component({name: 'contact'})
export default class Contact extends BaseComponent {
    @Prop({ required: true })
    public contact!: UIContact

    @Model('input')
    public dirty!: boolean

    public mounted () {
        // @ts-ignore
        window[`contact${this.contact.firstName}`] = this
    }

    public beforeDestroy () {
        // @ts-ignore
        window[`contact${this.contact.firstName}`] = undefined
    }

    public genderDisplay (gender: Gender) {
        return getGenderDisplay(gender)
    }

    public get options (): SelectOption[] {
        return genderOptions()
    }

    public setDirty () {
        this.$emit('input', true)
    }
}
