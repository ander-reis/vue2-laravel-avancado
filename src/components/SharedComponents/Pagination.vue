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
        active: 1
      }
    },
    computed: {
      registries () {
        return this.$store.state.pagination.getList
      },
      total () {
        return this.registries.last_page || 1
      },
      totalRegisters () {
        return this.registries.total || 0
      }
    },
    methods: {
      navigate (n) {
        this.active = n
        let config = {
          resource: this.resource,
          limit: this.totalPerPage,
          page: n
        }
        this.$store.dispatch('getRegistries', config)
      }
    },
    created () {
      this.$store.dispatch('getRegistries', {resource: this.resource, limit: this.totalPerPage})
    }
  }
</script>

<style scoped>

</style>
