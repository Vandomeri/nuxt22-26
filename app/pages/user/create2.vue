<template>
    <h1>Создание пользователя</h1>

    <form @submit.prevent="createUser()">
        <input v-model="form.email" type="text" placeholder="Email">
        <input v-model="form.password" type="text" placeholder="Password">
        <button :disabled="pending">Создать</button>
    </form>
    <p v-if="data?.email">
        Пользователь с Email - {{ data.email }} создан
    </p>
</template>

<script setup lang='ts'>

const form = reactive({
    email: '',
    password: ''
})

const { data, pending, execute } = await useAsyncData(
    'newUser',
    () => $fetch('/api/users', {
        method: 'POST',
        body: form
    }),
    {
        immediate: false
    }
)

async function createUser() {
    execute()

    form.email = ''
    form.password = ''
}

</script>