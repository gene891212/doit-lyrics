/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAdjust,
  faAngleRight,
  faArrowUp,
  faBackward,
  faBug,
  faCheckCircle,
  faExclamationTriangle,
  faForward,
  faInfoCircle,
  faLightbulb,
  faListOl,
  faListUl,
  faMusic,
  faPause,
  faPencilAlt,
  faPlay,
  faQuestionCircle,
  faQuoteRight,
  faSkullCrossbones,
  faTags,
  faTimesCircle,
  faUndoAlt
} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createManager } from '@vue-youtube/core'

import App from './App.vue'
import router from './router'
import './styles/main.css'
import './styles/style.scss'
import { createApp } from 'vue'

library.add(
  faArrowUp,
  faBackward,
  faPlay,
  faForward,
  faUndoAlt,
  faAdjust,
  faMusic,
  faPause,
  faInfoCircle,
  faAngleRight,
  faTags,
  faPencilAlt,
  faListUl,
  faLightbulb,
  faCheckCircle,
  faQuestionCircle,
  faExclamationTriangle,
  faTimesCircle,
  faSkullCrossbones,
  faBug,
  faListOl,
  faQuoteRight
)

const app = createApp(App)

app.use(router)
app.use(createManager())

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
