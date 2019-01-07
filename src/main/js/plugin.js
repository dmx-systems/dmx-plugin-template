// Every DMX plugin which extends the DMX webclient has a `src/main/js/plugin.js` file.
// This file exports a DMX plugin configuration object or a function which returns such an object.
// The function receives a "dependencies" object with 4 properties: 'store', 'dm5', 'axios', and 'Vue'.
// 'store' is the DMX webclient's Vuex store object.
export default ({store, dm5, axios, Vue}) => ({

  // A DMX plugin can provide its own Vuex store module.
  // This plugin's state is accessible as 'store.state.greeting' (according to the 'name' property).
  storeModule: {
    name: 'greeting',
    module: require('./greeting').default
  },

  // A DMX plugin can statically add Vue components to the DMX webclient.
  // 3 mount points are supported: 'webclient', 'toolbar-left', and 'toolbar-right'
  components: [{
    comp: require('./components/Greeting').default,
    mount: 'toolbar-left'
  }]

  // A DMX plugin can do more things at the client-side (not demonstrated here):
  // - declare Vuex store watchers
  // - provide type-specific detail renderers
  // - provide additional topicmap types and renderers
  // - add special items to the webclient's Create menu
})
