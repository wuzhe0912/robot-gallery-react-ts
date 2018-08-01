<template lang="pug">

</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Homepage',
  data () {
    return {
    }
  },
  created () {
    this.createSvg()
  },
  methods: {
    createSvg () {
      d3.select('body').append('div').text('d3')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
