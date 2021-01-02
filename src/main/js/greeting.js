// This is the Vuex store module provided by your plugin.
// This file exports a Vuex store module object or a function which returns such an object.
// The function receives a "dependencies" object with 3 properties: 'dmx', 'axios', and 'Vue'.
export default ({dmx, axios, Vue}) => ({

  state: {
    buttonLabel: 'Greetings!',
    greetingCount: 0
  },

  actions: {
    greet ({state, dispatch}) {
      state.greetingCount++
      dmx.rpc.createTopic({
        typeUri: 'dmx.notes.note',
        children: {
          'dmx.notes.title': `Greeting ${state.greetingCount}`,
          'dmx.notes.text':  '<p>from <b>DMX</b>!<p>'
        }
      }).then(topic => {
        dispatch('revealTopic', {topic})
      })
    }
  }
})
