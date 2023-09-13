<template>
    <div class="">
        
        <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
            <PostItem v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const posts = await nuxtApp.$apiFetch('/api/posts')

// const { data: posts } = await useFetch('api/posts', {
//     baseURL: 'http://127.0.0.1:8000/'
// });

// console.log(nuxtApp.$hello('MyatThu'))
</script>