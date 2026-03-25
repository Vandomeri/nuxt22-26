<template>
    <h1>Создание пользователя</h1>

    <form @submit.prevent="createUser()">
        <input v-model="form.email" type="text" placeholder="Email">
        <input v-model="form.password" type="text" placeholder="Password">
        <button :disabled="pending">Создать</button>
    </form>
    <p v-if="result?.email">
        Пользователь с Email - {{ result.email }} создан
    </p>
</template>

<script setup lang='ts'>

const form = reactive({
    email: '',
    password: ''
})

const result = ref<User | null>(null)
const pending = ref(false)

async function createUser() {

    pending.value = true

    const data = await $fetch('/api/users', {
        method: 'POST',
        body: form
    })

    if (data) {
        result.value = data

        form.email = ''
        form.password = ''
    }

    pending.value = false

}

</script>