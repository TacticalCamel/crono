<script setup lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList } from '@ionic/vue';
    import { useLocalstorageRef } from "@/composables/useLocalstorageRef";
    import { Task } from "@/models/Task";
    import TaskCard from "@/components/TaskCard.vue";

    const tasks = useLocalstorageRef<Task[]>('cr-test-tasks', createTasks(10));

    function createTasks(length: number): Task[] {
        const result: Task[] = [];

        for (let i = 0; i < length; i++) {
            result.push({
                id: crypto.randomUUID(),
                title: 'Task ' + i,
                description: 'Example description for task ' + i,
                priority: i % 4,
                status: i % 2,
                deadline: Date.now()
            });
        }

        return result;
    }
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tasks</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tasks</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-list>
                <task-card v-for="task in tasks" :task/>
            </ion-list>
        </ion-content>
    </ion-page>
</template>