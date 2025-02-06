<script setup lang="ts">
    import { IonCard, IonCardHeader, IonCardContent, IonText, IonCardTitle } from '@ionic/vue'
    import { Task } from "@/models/Task";
    import TaskLabelPriority from "@/components/TaskLabelPriority.vue";
    import TaskLabelDeadline from "@/components/TaskLabelDeadline.vue";

    const {task} = defineProps<{
        task: Task
    }>();
</script>

<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>
                <ion-text>{{ task.title }}</ion-text>
                <task-label-deadline v-if="task.deadline" :deadline="task.deadline"/>
                <task-label-priority :priority="task.priority"/>
            </ion-card-title>
        </ion-card-header>

        <ion-card-content>
            {{ task.description }}
        </ion-card-content>
    </ion-card>
</template>

<style scoped>
    ion-card-title {
        display: flex;
        align-items: center;
    }

    ion-card-title ion-text {
        margin-right: auto;
    }
</style>