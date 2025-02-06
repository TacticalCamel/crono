<script setup lang="ts">
    import { IonList } from "@ionic/vue";
    import { Task } from "@/models/Task";
    import TaskCard from "@/components/TaskCard.vue";
    import TaskListEmpty from "@/components/TaskListEmpty.vue";

    const {tasks} = defineProps<{
        tasks: Task[]
    }>();

    const emit = defineEmits<{
        edit: [task: Task]
    }>();
</script>

<template>
    <ion-list v-if="tasks.length">
        <task-card
            v-for="task in tasks"
            :task="task"
            @click="emit('edit', task)"
        />
    </ion-list>

    <task-list-empty v-else/>
</template>

<style scoped>
    ion-list {
        background-color: transparent;
    }
</style>