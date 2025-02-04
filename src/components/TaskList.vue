<script setup lang="ts">
    import { IonLabel } from "@ionic/vue";
    import { Task } from "@/models/Task";
    import TaskCard from "@/components/TaskCard.vue";
    import CatSleep from '@/assets/cat-sleep.svg'

    const {tasks} = defineProps<{
        tasks: Task[]
    }>();
</script>

<template>
    <div v-if="tasks.length">
        <task-card
            v-for="task in tasks"
            :task="task"
        />
    </div>

    <div v-else class="container">
        <img
            :src="CatSleep"
            alt="Empty task list illustration"
            class="illustration"
        />

        <ion-label>
            <h1>No unfinished tasks</h1>
            <p>Create a new one below</p>
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
        max-width: 280px;
    }
</style>