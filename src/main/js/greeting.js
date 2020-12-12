// This is the Vuex store module provided by your plugin.
// This file exports a Vuex store module object or a function which returns such an object.
// The function receives a "dependencies" object with 3 properties: 'dmx', 'axios', and 'Vue'.
export default ({dmx, axios, Vue}) => ({

  state: {
    buttonLabel: "Greetings!"
  },

  actions: {
    greet () {
      dmx.rpc.createTopic({
        typeUri: 'dmx.notes.note',
        children: {
          'dmx.notes.title': {value: 'Greetings'},
          'dmx.notes.text':  {value: '<p>from <b>DMX</b>!<p>'}
        }
      })
    }
  }
})
