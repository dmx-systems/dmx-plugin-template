console.log('Loading Plugin main.js')

import storeModule from './store-module'
import Greeting from './components/Greeting.vue'

export default {
  init ({store}) {
    console.log('Plugin init() called!!')
    // install store module
    store.registerModule('greeting', storeModule)
    // install component
    store.dispatch('addToToolbar', Greeting)
  }
}
