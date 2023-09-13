<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title> {{  $route.params.id }} | {{ post.title }}</Title>
        <div class="text-3xl font-bold">{{ post.title }}</div>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{ post.created_at }}</div>
            <div> | </div>
            <div>{{ post.title }}</div>
        </div>
        <div class="post-content leading-relaxed my-4">
            {{ $route.params.id }}{{  post.body }}
        </div>
    </div>
</template>
<script setup>

const title = useState('title')
const route = useRoute();
const post = await useNuxtApp().$apiFetch(`/api/posts/${route.params.id}`)
// const { data: post } = await useFetch(`http://127.0.0.1:8000/api/posts/${route.params.id}`);

</script>
