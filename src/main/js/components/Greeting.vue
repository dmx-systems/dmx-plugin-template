<!--
  The DMX webclient registers a bunch of Vue components globally, so you can just use them in your component's
  <template> without registering them yourself. These components comprise:
  1. all Element UI components utilized by the webclient, e.g. <el-button>, <el-input>, <el-select>, ..., see
     https://github.com/jri/deepamehta/blob/master/modules/dmx-webclient/src/main/js/element-ui.js
  2. all components provided by the `dm5-object-renderer` module, see
     https://github.com/jri/dm5-object-renderer/tree/master/src/components
-->
<template>
  <el-button class="greeting" @click="click">{{buttonLabel}}</el-button>
</template>

<script>
export default {

  // In a DMX webclient component you can inject 3 dependencies: 'dm5', 'axios', 'Vue'.
  // Important: do *not* import/require these libraries yourself. They would be statically bundled with your plugin then
  // (instead of being injected at runtime). Disadvantages: 1) The plugin build size would increase, and 2) at runtime
  // the libraries would be instantiated more than once, possibly causing problems.
  inject: {
    dm5:  'dm5',
    http: 'axios',
    Vue:  'Vue'
  },

  created () {
    this.http.get('/core/topic/0').then(response => {
      console.log(new this.dm5.Topic(response.data))
    })
    this.Vue.nextTick(() => {
      console.log('Hello Vue!')
    })
  },

  computed: {
    buttonLabel () {
      return this.$store.state.greeting.buttonLabel
    }
  },

  methods: {
    click () {
      this.$store.dispatch('greet')
    }
  }
}
</script>

<style>
.greeting {
  margin-left: 2em;
}
</style>
