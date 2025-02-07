<script setup lang="ts">
    import { useLocalstorageRef } from "@/composables/useLocalstorageRef";
    import { IonPage, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, modalController } from '@ionic/vue';
    import { add } from "ionicons/icons";
    import { Task } from "@/models/Task";
    import TaskList from "@/components/TaskList.vue";
    import ModalTaskCreate from "@/components/ModalTaskCreate.vue";

    const tasks = useLocalstorageRef<Task[]>('cr-test-tasks', []);

    async function openCreateModal() {
        // create modal
        const modal = await modalController.create({
            component: ModalTaskCreate
        });

        // present modal
        await modal.present();

        // wait until closed
        const {data, role} = await modal.onWillDismiss();

        // discard results
        if (role !== 'confirm') {
            return;
        }

        // create new task
        tasks.value.push(data);
    }

    async function openEditModal(task: Task) {
        // copy task
        task = {...task};

        const modal = await modalController.create({
            component: ModalTaskCreate,
            componentProps: {
                task: {...task}
            }
        });

        await modal.present();

        const {data, role} = await modal.onWillDismiss();

        if (role !== 'confirm') {
            return;
        }

        const index = tasks.value.findIndex(t => t.id === task.id);

        if(index < 0) {
            return;
        }

        if (data) {
            tasks.value[index] = data;
        }
        else {
            tasks.value.splice(index, 1);
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
        <ion-content fullscreen>
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tasks</ion-title>
                </ion-toolbar>
            </ion-header>

            <task-list
                :tasks="tasks"
                @edit="openEditModal"
            />

            <ion-fab slot="fixed" horizontal="end" vertical="bottom">
                <ion-fab-button @click="openCreateModal">
                    <ion-icon aria-label="Create task" :icon="add"/>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>