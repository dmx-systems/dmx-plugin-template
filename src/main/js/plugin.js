export default {

  storeModule: {
    name: 'greeting',
    module: require('./greeting').default
  },

  components: [{
    comp: require('./components/Greeting').default,
    mount: 'toolbar-left'
  }]
}
