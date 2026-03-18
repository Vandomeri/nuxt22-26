<template>
    <h1>Страница с динамичесим параметром - {{ route.params.person }}</h1>
</template>

<script setup lang='ts'>

const route = useRoute()


</script>