<template>
    <div class="">
        <Title> My Info | {{ title }}</Title>
        <div class="container mx-auto w-1/2 py-8">
            <div class="">
                User Information
                <h4>Username: {{ user?.name }}</h4>
                <h4>Email: {{ user?.email }}</h4>    
            </div>
            <div class="">
                <h3 class="text-2xl">My Posts</h3>
                <!-- <nuxt-link 
                    class="text-blue-600 hover:underline" 
                    :to="`/posts/${post?.id}`">
                    {{ post?.title }}
                </nuxt-link> -->
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
  middleware: ['auth'],
})
const  nuxtApp  = useNuxtApp();
const title = useState('title');
const user = ref(null);
const posts = ref([]);

onMounted(async ()=>{
    user.value = await nuxtApp.$apiFetch('/api/user');
    posts.value = await nuxtApp.$apiFetch('/api/user/posts');
})

</script>