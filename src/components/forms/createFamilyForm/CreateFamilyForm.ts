import {BaseComponent, Component} from '@/components/BaseComponent'
import {ContactRole, Gender, SelectOption} from '@/models'

@Component({name: 'create-family-form'})
export default class CreateFamilyForm extends BaseComponent {
    public familyName: string = ''
    public residence: string = ''
    public email: string = ''
    public contactFirstName: string = ''
    public contactLastName: string = ''
    public phone: string = ''
    public gender: Gender = Gender.FEMALE

    public mounted () {
        this.email = this.store.getters.email() || ''
        // @ts-ignore
        window.createFamilyForm = this
    }

    public get notReady (): boolean {
        return !this.familyName.length
            || !this.residence.length
            || !this.email.length
            || !this.contactLastName.length
            || !this.contactFirstName.length
            || !this.phone.length
    }

    public async createFamily () {
        try {
            await this.store.actions.createFamily({
                family: {
                    name: this.familyName,
                    homeTown: this.residence,
                    email: this.email
                },
                primary: {
                    firstName: this.contactFirstName,
                    lastName: this.contactLastName,
                    phone: this.phone,
                    gender: this.gender,
                    role: ContactRole.PRIMARY
                }
            })
            this.$q.notify({
                color: 'positive',
                message: 'Family Created Successfully'
            })
        } catch (error) {
            this.logger.error(`Error creating new family`, error)
        }
    }

    public beforeDestroy () {
        // @ts-ignore
        window.createFamilyForm = undefined
    }

    public get genderDisplay () {
        return this.getGenderDisplay(this.gender)
    }

    public getGenderDisplay (gender: Gender) {
        switch (gender) {
            case Gender.FEMALE:
                // @ts-ignore
                return this.$heb.female
            case Gender.MALE:
                // @ts-ignore
                return this.$heb.male
        }
    }

    public get options (): SelectOption[] {
        return Object.values(Gender).map( gen => {
            return {
                label: this.getGenderDisplay(gen),
                value: gen
            }
        })
    }
}
