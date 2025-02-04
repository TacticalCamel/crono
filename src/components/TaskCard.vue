<script setup lang="ts">
    import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue'
    import { Task } from "@/models/Task";
    import TaskCardPriority from "@/components/TaskCardPriority.vue";

    const {task} = defineProps<{
        task: Task
    }>();
</script>

<template>
    <ion-card color="light">
        <ion-card-header>
            <ion-card-title>
                <ion-row class="ion-justify-content-between ion-align-items-center">
                    <span>{{ task.title }}</span>
                    <task-card-priority :priority="task.priority"/>
                </ion-row>
            </ion-card-title>
        </ion-card-header>

        <ion-card-content>
            {{ task.description }}
        </ion-card-content>
    </ion-card>
</template>