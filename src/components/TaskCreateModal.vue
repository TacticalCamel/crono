<script setup lang="ts">
    import { ref } from "vue";
    import { IonContent, IonInput, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonCard, IonToolbar, IonButtons, IonTitle, IonHeader, modalController } from "@ionic/vue";
    import { Task } from "@/models/Task";
    import TaskCardPriority from "@/components/TaskCardPriority.vue";

    const task = ref<Task>({
        id: crypto.randomUUID(),
        title: '',
        description: '',
        priority: 0,
        status: 0,
        deadline: Date.now()
    });

    function confirm() {
        modalController.dismiss(task.value, 'confirm');
    }

    function cancel() {
        modalController.dismiss(null, 'cancel');
    }
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-title slot="start">
                Create a task
            </ion-title>

            <ion-buttons slot="end">
                <ion-button color="danger" @click="cancel()" strong>Cancel</ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <ion-card>
            <ion-input
                type="text"
                v-model="task.title"
                placeholder="Title"
                label="Task title"
                label-placement="stacked"
            />
        </ion-card>

        <ion-card>
            <ion-input
                type="text"
                v-model="task.description"
                placeholder="Description"
                label="Task description"
                label-placement="stacked"
            />
        </ion-card>

        <ion-card>
            <span>Deadline</span>

            <ion-datetime-button datetime="datetime"/>

            <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="datetime"/>
            </ion-modal>
        </ion-card>

        <ion-card>
            <task-card-priority
                v-for="priority in [0, 1, 2, 3]"
                :priority="priority"
                :outline="task.priority !== priority"
                @click="task.priority = priority"
            />
        </ion-card>

        <ion-button color="success" @click="confirm()">Create</ion-button>
    </ion-content>
</template>