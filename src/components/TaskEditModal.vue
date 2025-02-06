<script setup lang="ts">
    import { ref } from "vue";
    import { IonButton, IonButtons, IonContent, IonDatetime, IonCheckbox, IonDatetimeButton, IonInput, IonIcon, IonModal, modalController, IonItem, IonLabel } from "@ionic/vue";
    import { close } from "ionicons/icons";
    import { Task } from "@/models/Task";
    import { TaskPriority } from "@/models/TaskPriority";
    import TaskLabelPriority from "@/components/TaskLabelPriority.vue";

    const props = defineProps<{
        task: Task
    }>();

    const task = ref(props.task);

    /*
    * auto: id, status
    * what: title, description=''
    * when: priority=medium, deadline=undefined, repeatable=false
    */

    const hasDeadline = ref(true);

    function confirm() {
        if (!hasDeadline.value) {
            task.value.deadline = undefined;
        }

        modalController.dismiss(task.value, 'confirm');
    }

    function cancel() {
        modalController.dismiss(null, 'cancel');
    }

    function setPriority(priority: TaskPriority) {
        task.value.priority = priority;
    }
</script>

<template>
    <ion-content>
        <div class="list ion-padding">
            <ion-item color="transparent" lines="none">
                <ion-buttons slot="start">
                    <ion-button @click="cancel()">
                        <ion-icon :icon="close"/>
                    </ion-button>
                </ion-buttons>

                <ion-buttons slot="end">
                    <ion-button fill="solid" color="primary" shape="round" size="small" @click="confirm()">Save</ion-button>
                </ion-buttons>
            </ion-item>

            <ion-input
                type="text"
                fill="outline"
                v-model="task.title"
                placeholder="Title"
                label="Task title"
                label-placement="floating"
            />


            <ion-item color="transparent" lines="none">
                <ion-checkbox v-model="hasDeadline"/>

                <ion-label>Deadline</ion-label>

                <ion-datetime-button datetime="datetime" :disabled="!hasDeadline"/>

                <ion-modal :keep-contents-mounted="true">
                    <ion-datetime id="datetime"/>
                </ion-modal>
            </ion-item>

            <ion-item color="transparent" lines="none">
                <ion-checkbox v-model="task.repeatable"/>
                <ion-label>Repeatable</ion-label>
            </ion-item>

            <ion-item color="transparent" lines="none">
                <ion-label>Priority</ion-label>

                <task-label-priority
                    v-for="priority in [TaskPriority.low, TaskPriority.medium, TaskPriority.high, TaskPriority.urgent]"
                    :priority="priority"
                    :class="{'priority-active': task.priority === priority}"
                    @click="setPriority(priority)"
                />
            </ion-item>

            <div>
                <ion-input
                    type="text"
                    fill="outline"
                    v-model="task.description"
                    placeholder="Description"
                    label="Task description"
                    label-placement="floating"
                />
            </div>
        </div>
    </ion-content>
</template>

<style scoped>
    .list {
        display: grid;
        gap: 1rem;
    }

    .priority-active {
        outline: 2px solid var(--ion-color-base);
        outline-offset: -2px;
    }
</style>