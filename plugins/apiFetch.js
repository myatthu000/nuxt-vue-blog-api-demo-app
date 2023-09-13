import { defineNuxtPlugin } from 'nuxt/app'
import Cookies from 'js-cookie'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  nuxtApp.provide(
    'apiFetch',
    $fetch.create({
      baseURL: config.public.BASE_URL,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
    })
  )
  // nuxtApp.provide('apiFetch', $fetch.create({ baseURL: "http://127.0.0.1:8000/" }))
  // nuxtApp.provide('hello',name => `Hello ${name}`)
})
