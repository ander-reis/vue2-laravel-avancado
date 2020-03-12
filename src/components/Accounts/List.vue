<template>
  <div class="row">
    <div class="content-header">
      <h1>Contas bancárias <small>Gerenciamento de contas</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Suas contas</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <table class="highlight">
          <thead>
            <tr>
              <th>contas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts.data" @click="goTo(account.id)">
              <td class="valign-wrapper">
                {{ account.title }}
                <small>agência: {{ account.agency }} / conta: {{ account.account_number }}  / código do banco: {{ account.bank_id }} </small>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination totalPerPage="25" resource="accounts"></pagination>
      </div>
      <div class="card-action">
        <a href="#/contas/novo">Nova conta</a>
      </div>
    </div>
  </div>
</template>

<script>

  import Pagination from '../SharedComponents/Pagination'

export default {
    name: 'accounts',
    components: {
      'pagination': Pagination
    },
    methods: {
      goTo: function (id) {
        this.$router.push('/contas/' + id)
      }
    },
    computed: {
      accounts () {
        return this.$store.state.pagination.getList
      }
    }
}
</script>

<style>
tbody tr {
  cursor: pointer
}
</style>
