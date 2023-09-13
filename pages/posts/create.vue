<template>
  <div class="">
    <div
      class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300"
    >
      <div class="w-full my-2">
        <ul class="text-red-500 mb-4 list-disc list-inside text-sm" v-if="errors.length > 0">
            <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div class="py-4">
        <form action="#" @submit.prevent="createPost">
          <div class="w-full my-2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="title"
            >
              Title
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="title"
              type="text"
              name="title"
              v-model="title"
              placeholder="title"
            />
          </div>
          <div class="w-full my-2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="body"
            >
              Body
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="body"
              id="body"
              rows="10"
              v-model="body"
            ></textarea>
          </div>
          <div class="mt-4 px-3">
            <button
              class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2"
              :disabled="isLoading"
            >
              Create
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
  middleware: ['auth'],
})

const title = ref('')
const body = ref('')
const isLoading = ref(false)
const errors = ref([])
const router = useRouter()

async function createPost() {
  isLoading.value = true
  try{
const post = await useNuxtApp().$apiFetch(`/api/post`, {
    method: 'POST',
    body: {
      title: title.value,
      body: body.value,
    },
  })
  title.value = ''
  body.value = ''
  console.log(post)

  alert('Creating post')
  router.push('/')
  }catch(err){
    // errors = err.data
    // console.log(err.data);
    console.log('ttttttt',errors);
    errors.value = Object.values(err.data.errors).flat();
    isLoading.value = false;
  }
  

}
</script>
