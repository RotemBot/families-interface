import {BaseComponent, Component} from '@/components/BaseComponent'
import {UIContact} from '@/models'

@Component({name: 'contacts'})
export default class Contacts extends BaseComponent {
    public get primaryContact (): UIContact {
        return this.store.getters.family()!.primaryContact
    }

    public get secondaryContact (): UIContact | undefined {
        return this.store.getters.family()!.secondaryContact
    }

    public primaryDirty: boolean = false
    public secondaryDirty: boolean = false

    public savePrimary () {
        if (this.primaryDirty) {
            this.primaryDirty = false
        }
    }

    public saveSecondary () {
        if (this.secondaryDirty) {
            this.secondaryDirty = false
        }
    }
}
