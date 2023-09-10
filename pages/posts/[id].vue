<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title> {{  $route.params.id }} | {{ title }}</Title>
        <div class="text-3xl font-bold">Title of Post</div>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>Feb, 2, 2022</div>
            <div> | </div>
            <div>Hannah</div>
        </div>
        <div class="post-content leading-relaxed my-4">
            {{ $route.params.id }} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cumque quod distinctio officiis provident possimus sunt! Reiciendis quae quidem ipsum tenetur temporibus cumque est? Ipsum labore iusto reprehenderit ad quasi rerum sunt debitis nemo sequi voluptatem eveniet, velit tenetur, nulla cumque totam est? Nobis ipsum quis laborum, laudantium autem velit?
        </div>
    </div>
</template>
<script setup>
const title = useState('title')


</script>
