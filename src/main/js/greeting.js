export default ({dm5}) => ({

  state: {
    buttonLabel: "Greetings!"
  },

  actions: {
    greet () {
      console.log('Greetings!')
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
