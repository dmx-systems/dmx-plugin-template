<template>
  <el-button class="greeting" @click="click">{{buttonLabel}}</el-button>
</template>

<script>
export default {

  inject: {
    dm5:  'dm5',
    http: 'axios',
    Vue:  'Vue'
  },

  created () {
    console.log('Greeting created!', this.dm5, this.http, this.Vue)
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
  align-self: flex-end;
}
</style>
