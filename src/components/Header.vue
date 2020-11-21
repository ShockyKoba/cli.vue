<template>
    <header class="py-4">
        <div class="container-fluid">
            <h1 class="w-75 mx-auto mt-3 mb-4">{{ title }}</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Page'
        }
    }
}
</script>