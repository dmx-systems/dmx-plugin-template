export default ({dm5, axios, Vue}) => ({

  state: {
    buttonLabel: "Greetings!"
  },

  actions: {
    greet () {
      console.log('greet', dm5, axios, Vue)
      dm5.restClient.createTopic({
        typeUri: 'dmx.notes.note',
        childs: {
          'dmx.notes.title': {value: 'Greetings'},
          'dmx.notes.text':  {value: '<p>from <b>DMX</b>!<p>'}
        }
      })
    }
  }
})
