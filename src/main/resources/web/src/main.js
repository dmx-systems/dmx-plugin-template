export default {

  storeModule: {
    name: 'greeting',
    module: require('./greeting').default
  },

  components: [
    {
      extensionPoint: 'dm5.webclient.toolbar',
      component: require('./components/Greeting').default
    }
  ]
}
