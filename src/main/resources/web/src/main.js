export default {

  storeModule: {
    name: 'greeting',
    module: require('./greeting')
  },

  components: [
    {
      extensionPoint: 'dm5.webclient.toolbar',
      component: require('./components/Greeting')
    }
  ]
}
