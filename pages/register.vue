<template>
  <div class="">
    <div
      class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300"
    >
      <div class="w-full my-2">
        <div class="w-full my-2">
        <ul class="text-red-500 mb-4 list-disc list-inside text-sm" v-if="errors.length > 0">
            <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      </div>
      <div class="py-4">
        <form action="#" @submit.prevent="register">
          <div class="w-full my-2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="name"
            >
              Username
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              name="name"
              v-model="name"
              placeholder="name"
            />
          </div>
          <div class="w-full my-2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              name="email"
              v-model="email"
              placeholder="Email"
            />
          </div>
          <div class="w-full my-2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
              v-model="password"
              placeholder="password"
            />
          </div>
          <div class="w-full my-2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="passwordConfirm"
            >
              Password Confirm
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="passwordConfirm"
              type="password"
              v-model="passwordConfirm"
              placeholder="Confirm password"
            />
          </div>
          <div class="mt-4 px-3">
            <button
              class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2"
              :disabled="isLoading"
            >
              Register
            </button>
            <span v-if="isLoading">Loading ....</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>

definePageMeta({
  middleware: ['guest'],
})

const router = useRouter()
const nuxtApp = useNuxtApp()
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const errors = ref([])
const isLoading = ref(false)

function csrf() {
  return nuxtApp.$apiFetch('/sanctum/csrf-cookie')
}

async function register() {
  isLoading.value = true
  await csrf()
  try {
    await nuxtApp.$apiFetch('/register', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
      },
    })

    const user = await nuxtApp.$apiFetch('/api/user')
    const { setUser } = useAuth();
    setUser(user.name)

    console.log('-', email.value)
    console.log('-', password.value)
    console.log('-', passwordConfirm.value)

    alert('register')
    router.push('/info')
  } catch (err) {
    console.log('ttttttt', errors)
    errors.value = Object.values(err.data.errors).flat();
    isLoading.value = false
    console.log('-', email.value)
    console.log('-', password.value)
    console.log('-', passwordConfirm.value)
  }
}
</script>
