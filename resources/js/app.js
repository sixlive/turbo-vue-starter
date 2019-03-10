/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')
const nanobar = require('nanobar')

import route from '../../vendor/tightenco/ziggy/src/js/route'

const Vue = require('vue')
window.Vue = Vue

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key =>
  Vue.component(
    key
      .split('/')
      .pop()
      .split('.')[0],
    files(key).default
  )
)

// Ziggy configuration
Vue.mixin({
  methods: {
    route: route,
  },
})

Vue.prototype.$route = route

// Progressbar
let progressBar

document.addEventListener('turbolinks:request-start', () => {
  progressBar = new nanobar({
    target: document.getElementById('progress-bar'),
  })
})

document.addEventListener('turbolinks:request-end', () => {
  progressBar.go(100)
})

// Start Turbolinks
require('turbolinks').start()

// Boot the current Vue component
document.addEventListener('turbolinks:load', () => {
  const root = document.getElementById('app')

  if (window.vue) {
    window.vue.$destroy(true)
  }

  // Global store
  Vue.prototype.$store = JSON.parse(root.dataset.store)

  window.vue = new Vue({
    render: h =>
      h(Vue.component(root.dataset.component), {
        props: JSON.parse(root.dataset.props),
      }),
  }).$mount(root)
})
