<template>
    <h1>products</h1>
    <select v-model="chosenPost">

        <option v-for="post in posts" :value="post.id">{{ post.title }}</option>

    </select>


    <p>{{ data.body }}</p>
</template>

<script setup lang='ts'>

const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')

const chosenPost = ref("1")


const { data } = await useAsyncData(
    () => chosenPost.value,
    () => $fetch(`https://jsonplaceholder.typicode.com/posts/${chosenPost.value}`)
)


</script>