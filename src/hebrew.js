import Vue from 'vue'

class Hebrew {
    static appName = `צ'יף ספורט`
    static login = `התחברות`
    static welcomeMessage = `ברוכים הבאים למערכת הפעילויות של ${this.appName}`
    static logOut = `התנתק`
    static createFamilyFormHeader = `יצירת כרטיס למשפחה חדשה`
    static darkTheme = `תצוגה כהה`
    static joinUs = `הצטרפות`
    static familyFormDesc =`ברוכים הבאים! כדי להצטרף לפעילויות שלנו, ראשית עליכם לפתוח כרטיס עבור המשפחה, כדי שנכיר אתכם.`
    static familyName = `שם המשפחה`
    static residence = `ישוב המגורים`
    static email = `דוא"ל`
    static emailHint = `אם ברצונך להשתמש בכתובת אחרת כראשית, יש להתחבר מחדש באמצעות אותה הכתובת.`
    static firstName = 'שם פרטי'
    static lastName = 'שם משפחה'
    static requiredFieldWarning = `שדה זה הינו חובה`
    static primaryContactDetails = `פרטי איש הקשר הראשי`
    static phoneNumber = `מספר טלפון`
    static female = `נקבה`
    static male = `זכר`
    static family = `משפחת`

    toJSON() {
        const keys = Object.getOwnPropertyNames(Hebrew).splice(3)
        const dict = {}
        for (const key of keys) {
            dict[key] = Hebrew[key]
        }
        return dict
    }
}

const hebDict = new Hebrew()

Vue.prototype.$heb = {
    ...hebDict.toJSON()
}
