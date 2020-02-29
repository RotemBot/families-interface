import Vue from 'vue'

class Hebrew {
    static appName = `צ'יף ספורט`
    static login = `התחברות`
    static welcomeMessage = `ברוכים הבאים למערכת הפעילויות של ${this.appName}`
    static logOut = `התנתק`

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
