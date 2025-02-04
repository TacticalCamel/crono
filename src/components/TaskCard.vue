<script setup lang="ts">
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonRow, IonLabel } from '@ionic/vue'
    import { Task } from "@/models/Task";
    import TaskCardPriority from "@/components/TaskCardPriority.vue";

    const {task} = defineProps<{
        task: Task
    }>();
</script>

<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>
                <ion-row class="ion-justify-content-between ion-align-items-center">
                    <ion-label>{{ task.title }}</ion-label>
                    <task-card-priority :priority="task.priority"/>
                </ion-row>
            </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            {{ task.description }}
        </ion-card-content>
    </ion-card>
</template>