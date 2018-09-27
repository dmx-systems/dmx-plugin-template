<template>
  <el-button class="greeting" @click="click">{{buttonLabel}}</el-button>
</template>

<script>
export default {

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
