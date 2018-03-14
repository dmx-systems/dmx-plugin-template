<template>
  <el-button @click="click">{{text}}</el-button>
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
