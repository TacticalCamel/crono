<script setup lang="ts">
    import { IonList } from "@ionic/vue";
    import { Task } from "@/models/Task";
    import TaskCard from "@/components/TaskCard.vue";

    const {tasks} = defineProps<{
        tasks: Task[]
    }>();
</script>

<template>
    <ion-list>
        <task-card
            v-for="task in tasks"
            :task="task"
        />
    </ion-list>
</template>