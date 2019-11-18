// This is the Vuex store module provided by your plugin.
// This file exports a Vuex store module object or a function which returns such an object.
// The function receives a "dependencies" object with 3 properties: 'dm5', 'axios', and 'Vue'.
export default ({dm5, axios, Vue}) => ({

  state: {
    buttonLabel: "Greetings!"
  },

  actions: {
    greet () {
      dm5.restClient.createTopic({
        typeUri: 'dmx.notes.note',
        children: {
          'dmx.notes.title': {value: 'Greetings'},
          'dmx.notes.text':  {value: '<p>from <b>DMX</b>!<p>'}
        }
      })
    }
  }
})
