import Hello from 'components/Hello'
import AccountsList from '../components/Accounts/List'
import AccountsView from '../components/Accounts/View'
import AccountsCreate from '../components/Accounts/Create'
import AccountsEdit from '../components/Accounts/Edit'

import BanksList from '../components/Banks/List'
import Login from '../components/Login/Form'

const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '/contas', component: AccountsList },
  { path: '/contas/novo', component: AccountsCreate },
  { path: '/contas/:id', component: AccountsView },
  { path: '/contas/:id/editar', component: AccountsEdit },

  { path: '/bancos', component: BanksList },
  { path: '/login', component: Login }
]

export default routes
