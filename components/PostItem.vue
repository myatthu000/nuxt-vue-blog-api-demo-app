<template>
    <div class="py-4">
        <div class="text-3xl font-bold">
            <nuxt-link :to="`/posts/${props.post.id}`" class="hover:text-blue-500 
            rounded inline-block
            ">{{ props.post.title }}</nuxt-link></div>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{props.post.created_at }}</div>
            <div> | </div>
            <div>{{ props.post.user.name }}</div>
        </div>
        <div class="post-preview leading-relaxed mt-4 line-clamp-3">
            {{ props.post.body }}
        </div>
        <div class="mt-4">
            <nuxt-link :to="`/posts/${props.post.id}`" class="bg-blue-700 hover:bg-blue-800 
            text-white rounded inline-block px-4 py-2
            ">Read More</nuxt-link>
        </div>
    </div>
</template>
<script setup>
// import { format } from 'data-fns';
const props = defineProps({
    post: Object,
});
</script>