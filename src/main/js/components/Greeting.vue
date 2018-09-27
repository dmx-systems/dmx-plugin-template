<template>
  <el-button class="greeting" @click="click">{{text}}</el-button>
</template>

<script>
export default {

  data () {
    return {
      text: 'Hello DeepaMehta!'
    }
  },

  methods: {
    click () {
      console.log('Button clicked')
    }
  }
}
</script>

<style>
.greeting {
  align-self: flex-end;
}
</style>
