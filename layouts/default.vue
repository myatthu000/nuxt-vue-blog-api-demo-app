<template>
    <div class="bg-gray-100 min-h-screen to-gray-900">
        <Title>{{ title }}</Title>
        <nav class="bg-white shadow text-lg px-6 py-6">
            <div class="container mx-auto flex items-center justify-between px-6">
                <div class="">
                    <nuxt-link to="/">Logo</nuxt-link>
                </div>
                <div class="">
                    <ClientOnly>
                        <ul class="flex space-x-12">
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                            <li v-if="isLoggedIn"><nuxt-link to="/about">About</nuxt-link></li>
                            <li v-if="isLoggedIn"><nuxt-link to="/posts/create">Create</nuxt-link></li>
                            <li v-if="isLoggedIn"><nuxt-link to="/info">My Info</nuxt-link></li>
                            <li v-if="!isLoggedIn"><nuxt-link to="/login">Login</nuxt-link></li>
                            <li v-if="!isLoggedIn"><nuxt-link to="/register">Register</nuxt-link></li>
                            <li v-if="isLoggedIn"><button @click="logout">Logout</button></li>
                            <li v-if="isLoggedIn">
                                {{  getUser()?.name }}
                            </li>
                        </ul>
                    </ClientOnly>
                    
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
const { removeUser,isLoggedIn,getUser } = useAuth()

async function logout(){
    console.log("logout1")
    try{
        await useNuxtApp().$apiFetch('/logout',{
            method: 'POST'
        })
        console.log("logout2")        
    }catch(err){
        console.log('ttttttt',err.data);
    }finally{
        removeUser()
        alert("logout");
        window.location.pathname = '/'
    }

}

</script>
