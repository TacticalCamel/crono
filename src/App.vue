<script setup lang="ts">
    import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<template>
    <ion-app>
        <ion-router-outlet/>
    </ion-app>
</template>

<style>
    :root {
        --ion-safe-area-top: 18px;
    }
</style>