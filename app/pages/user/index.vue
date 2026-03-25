<template>
    <h1>Кабинет пользователя</h1>


    <div v-for="user in data">
        {{ user.email }} - {{ user.password }}
    </div>

    <button @click="refresh()">Обновить данные</button>


</template>

<script setup lang='ts'>

const { data, refresh } = await useFetch('/api/users')

console.log(data.value)

</script>