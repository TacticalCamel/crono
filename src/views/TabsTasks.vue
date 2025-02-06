<script setup lang="ts">
    import { useLocalstorageRef } from "@/composables/useLocalstorageRef";
    import { IonPage, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, modalController } from '@ionic/vue';
    import { add } from "ionicons/icons";
    import { Task } from "@/models/Task";
    import TaskList from "@/components/TaskList.vue";
    import TaskEditModal from "@/components/TaskEditModal.vue";
    import { TaskPriority } from "@/models/TaskPriority";
    import { TaskStatus } from "@/models/TaskStatus";

    const tasks = useLocalstorageRef<Task[]>('cr-test-tasks', createTasks(10));

    function createTasks(length: number): Task[] {
        const result: Task[] = [];

        for (let i = 0; i < length; i++) {
            result.push({
                id: crypto.randomUUID(),
                title: 'Task ' + i,
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                priority: i % 4,
                status: i % 2,
                deadline: Date.now(),
                repeatable: false
            });
        }

        return result;
    }

    async function openModal(task: Task | undefined = undefined) {
        const creating = task === undefined;

        if (!task) {
            task = {
                id: crypto.randomUUID(),
                title: '',
                description: '',
                priority: TaskPriority.medium,
                status: TaskStatus.toDo,
                deadline: Date.now(),
                repeatable: false
            };
        }
        else {
            task = {...task};
        }

        const modal = await modalController.create({
            component: TaskEditModal,
            componentProps: {task},
            breakpoints: [0.25, 1],
            initialBreakpoint: 1,
            backdropDismiss: false,
            backdropBreakpoint: 0.25
        });

        await modal.present();

        const {data, role} = await modal.onWillDismiss();

        if (role === 'confirm') {
            if (creating) {
                tasks.value.push(data);
            }
            else {
                const index = tasks.value.findIndex(t => t.id === data.id);

                if(index >= 0) {
                    tasks.value[index] = data;
                }
            }
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
                @edit="openModal"
            />

            <ion-fab slot="fixed" horizontal="end" vertical="bottom">
                <ion-fab-button @click="openModal()">
                    <ion-icon aria-label="Create task" :icon="add"/>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>