// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// import LoginInterceptors from './components/Login/interceptors'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQwNjllNTljYTBmMDA2Yjc3NjIwYjVhM2UyZjk5MGIzYWVmZjA1ODI1MTdlMWM4YmViMDk0Mjc2YTk4NmI2OTk5ZmEyNjBkYTE3NzhmM2Y3In0.eyJhdWQiOiIxIiwianRpIjoiNDA2OWU1OWNhMGYwMDZiNzc2MjBiNWEzZTJmOTkwYjNhZWZmMDU4MjUxN2UxYzhiZWIwOTQyNzZhOTg2YjY5OTlmYTI2MGRhMTc3OGYzZjciLCJpYXQiOjE1ODUxNDc2NjMsIm5iZiI6MTU4NTE0NzY2MywiZXhwIjoxNTkzNzg3NjYzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KnB8H9Ek-uIFOxnaZVx5W_t4Fs0c18KYGYGbcr3pS2-C8LxrfudvBGdeczBgf3opUU-y4FPnlD_-NnsJILxgutGmoNggnjfDWg5MD7b1qpFNpshx6UQZOTzODi-dhhxDNLqK8hmf1fZdmNGJR_3FCZSet2jA_TXrgEtOBWAarrZjOa5SerSqYcDnxIoh8vWJYZMBI-ptJvoUoSOKXgsZWeReeT-_obLEqQd-lfdq41tOrqfm-a3h-DIuAzAbSrWCBcs9rrfPsZCZbe1pU86b4h59A_G4aoYCKFrqzek8gXLvGHoGB3W8Ia1EqHFdGvKhhEFfhxUut3Gj6HV3h_6lp0fxNxG0iDLDUzcltxU3dRHs7dR-6r7jrcQ_Md3CiQU9AvLhTF1UKdCTUHXWEHriINJt6gg8Lql6C8l5UqMro6fu0UFcf7EtvRr61KwqFjwf0j6q3RmwZXT17LNS_r-Z7t5LvzX28L7WvDbTTNyHFB_LJKVNLjBtHrLx33-Rv9usIy7zsj8ruhD54BSezqysRqu0UZaltm1jQqQuJjr3vDYs9p5lYAABt_7UhD655aBFHpZYmA-jyvOXpBrXMMrHmQxrdjsHloXcIz6hiKdFXGqCTSHc_cefhUEeIOjcghoLEgnQsOyub5aHNBukHudxNGO_Z1zohHoHZD-rLZXGAso')
  next()
})

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
  routes
})

// LoginInterceptors.check_empty_token(router)
// LoginInterceptors.check_auth(router)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('clearRegistries')
    }
  },
  template: '<App/>',
  components: { App }
})
