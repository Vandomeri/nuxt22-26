<template>
    <h1>Кабинет пользователя</h1>

    <p v-if="status === 'success'">Успешно загрузилось</p>

    <div v-for="user in data">
        <p>{{ user.email }}</p>
    </div>


    <button @click="execute()">Загрузить данные</button>


</template>

<script setup lang='ts'>

const { data, error, status, execute } = await useFetch<User[]>('https://jsonplaceholder.typicode.com/users', {
    immediate: false
})

console.log("data", data.value)
console.log("error", error.value)

</script>