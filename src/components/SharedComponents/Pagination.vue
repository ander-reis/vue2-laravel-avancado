<template>
  <center>
    <ul class="pagination">
      <li class="waves-effect" :class="{active: n == active}" v-for="n in parseInt(total)">
        <a href="" @click.prevent="navigate(n)">{{ n }}</a>
      </li>
    </ul>
    <p>Exibindo página {{ active }} de {{ total }}, total de {{ totalRegisters }} registros.</p>
  </center>
</template>

<script>
  export default {
    name: 'Pagination',
    props: [
      'totalPerPage',
      'resource'
    ],
    data () {
      return {
        active: 1,
        total: 4,
        totalRegisters: 75
      }
    },
    methods: {
      navigate (n) {
        this.active = n
      }
    },
    created () {
      this.$store.dispatch(this.resource)
    }
  }
</script>

<style scoped>

</style>
