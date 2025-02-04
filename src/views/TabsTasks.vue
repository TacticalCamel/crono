<script setup lang="ts">
    import { useLocalstorageRef } from "@/composables/useLocalstorageRef";
    import { IonPage, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, modalController } from '@ionic/vue';
    import { add } from "ionicons/icons";
    import { Task } from "@/models/Task";
    import TaskList from "@/components/TaskList.vue";
    import TaskCreateModal from "@/components/TaskCreateModal.vue";

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

    async function openModal() {
        const modal = await modalController.create({
            component: TaskCreateModal
        });

        await modal.present();

        const {data, role} = await modal.onWillDismiss();

        if(role === 'confirm') {
            tasks.value.push(data);
        }
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

            <task-list :tasks="tasks"/>

            <ion-fab slot="fixed" horizontal="end" vertical="bottom">
                <ion-fab-button @click="openModal">
                    <ion-icon :icon="add"/>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>