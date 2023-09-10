<template>
    <div class="py-4">
        <div class="text-3xl font-bold">
            <nuxt-link to="/posts/1" class="hover:text-blue-500 
            rounded inline-block
            ">Title of Post</nuxt-link></div>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>Feb, 2, 2022</div>
            <div> | </div>
            <div>Hannah</div>
        </div>
        <div class="post-preview leading-relaxed mt-4">
            Contact Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cumque quod distinctio officiis provident possimus sunt! Reiciendis quae quidem ipsum tenetur temporibus cumque est? Ipsum labore iusto reprehenderit ad quasi rerum sunt debitis nemo sequi voluptatem eveniet, velit tenetur, nulla cumque totam est? Nobis ipsum quis laborum, laudantium autem velit?
        </div>
        <div class="mt-4">
            <nuxt-link to="/posts/1" class="bg-blue-700 hover:bg-blue-800 
            text-white rounded inline-block px-4 py-2
            ">Read More</nuxt-link>
        </div>
    </div>
</template>
<script setup>
</script>