<template>
    <div class="bg-gray-100 min-h-screen to-gray-900">
        <Title>{{ title }}</Title>
        <nav class="bg-white shadow text-lg px-6 py-6">
            <div class="container mx-auto flex items-center justify-between px-6">
                <div class="">
                    <nuxt-link to="/">Logo</nuxt-link>
                </div>
                <div class="">
                    <ul class="flex space-x-12">
                        <li><nuxt-link to="/">Home</nuxt-link></li>
                        <li><nuxt-link to="/about">About</nuxt-link></li>
                        <li><nuxt-link to="/Contact">Contact</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <slot></slot>
    </div>
</template>
<style>
    .router-link-active{
        font-weight: bold;
        color: #13cfad;
    }
</style>
<script setup>
const title = useState('title', ()=>'Nuxt3 blog');


</script>
