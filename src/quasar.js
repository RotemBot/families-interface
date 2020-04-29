import Vue from 'vue'
import './styles/quasar.styl'
import lang from 'quasar/lang/he.js'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import {
    Quasar,
    QAvatar,
    QLayout,
    QHeader,
    QCard,
    QCardSection,
    QCardActions,
    QDrawer,
    QPageContainer,
    QPage,
    QScrollArea,
    QToolbar,
    QToolbarTitle,
    QTooltip,
    QToggle,
    QMenu,
    QBtn,
    QIcon,
    QList,
    QInput,
    QItem,
    QItemSection,
    QItemLabel,
    QImg,
    QSelect,
    Cookies,
    Notify
} from 'quasar'

Vue.use(Quasar, {
    config: {
        dark: 'auto'
    },
    components: {
        QAvatar,
        QLayout,
        QHeader,
        QCard,
        QCardSection,
        QCardActions,
        QDrawer,
        QPageContainer,
        QPage,
        QScrollArea,
        QToolbar,
        QToolbarTitle,
        QTooltip,
        QToggle,
        QMenu,
        QBtn,
        QIcon,
        QList,
        QInput,
        QItem,
        QItemSection,
        QItemLabel,
        QImg,
        QSelect
    },
    directives: {
    },
    plugins: {
        Cookies,
        Notify
    },
    lang: lang
})
