<template>
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
</template>

<script setup lang='ts'>

const count = ref(1)

</script>