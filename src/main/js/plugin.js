// Export a DMX plugin config object or a function which returns such an object.
// The function receives a "dependencies" object with 4 properties.
export default ({store, dm5, axios, Vue}) => {

  console.log('plugin.js injection:', store, dm5, axios, Vue)

  return {
    storeModule: {
      name: 'greeting',
      module: require('./greeting').default
    },

    components: [{
      comp: require('./components/Greeting').default,
      mount: 'toolbar-left'
    }]
  }
}
