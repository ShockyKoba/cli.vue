<template>
    <main class="page 404"></main>
</template>

<script>
import {redirectHome} from '../functions.js';

export default {
    created () {
        redirectHome();
    }
}
</script>