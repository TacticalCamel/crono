<script setup lang="ts">
    import CatSleep from "@/assets/cat-sleep.svg";
    import { IonLabel } from "@ionic/vue";

</script>

<template>
    <div class="container">
        <img
            :src="CatSleep"
            alt="Empty task list illustration"
            class="illustration"
        />

        <ion-label>
            <h1>No unfinished tasks</h1>
            <p>Create a task and it will show up here</p>
        </ion-label>
    </div>
</template>

<style scoped>
    .container {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .illustration {
        padding-left: 10px;
        max-width: 240px;
    }
</style>