<script setup lang="ts">
    import { computed } from "vue";
    import { IonList } from "@ionic/vue";
    import { Task } from "@/models/Task";
    import TaskCard from "@/components/TaskCard.vue";
    import TaskListEmpty from "@/components/TaskListEmpty.vue";

    const {tasks} = defineProps<{
        tasks: Task[]
    }>();

    const sortedTasks = computed(() => {
        return tasks.toSorted((a, b) => {
            // highest priority first
            if(a.priority !== b.priority) {
                return a.priority < b.priority ? 1 : -1;
            }

            // earliest deadline first if equal in priority
            if(a.deadline === undefined) {
                return 1;
            }

            if(b.deadline === undefined) {
                return -1;
            }

            return a.deadline < b.deadline ? -1 : 1;
        });
    });

    const emit = defineEmits<{
        edit: [task: Task]
    }>();
</script>

<template>
    <ion-list v-if="tasks.length">
        <task-card
            v-for="task in sortedTasks"
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