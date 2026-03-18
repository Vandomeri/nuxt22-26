<template>

    <header>
        <div>
            Шаблон по умолчанию
        </div>
        <nav>
            <NuxtLink to="/">Главная</NuxtLink>
            <NuxtLink to="/about">О нас</NuxtLink>
        </nav>
    </header>

    <main>
        <slot />
    </main>


</template>

<script setup lang='ts'></script>