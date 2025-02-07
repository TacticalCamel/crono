<script setup lang="ts">
    import { computed, onMounted, reactive, ref, useTemplateRef } from "vue";
    import { IonContent, IonInput, IonHeader, IonToolbar, IonButton, IonList, modalController, IonButtons, IonLabel, IonIcon, IonItemGroup, IonModal, IonItem, IonDatetimeButton, IonToggle } from "@ionic/vue";
    import { millisecondsInHour } from "date-fns/constants";
    import { close } from "ionicons/icons";
    import { Task } from "@/models/Task";
    import { TaskPriority } from "@/models/TaskPriority";
    import { TaskStatus } from "@/models/TaskStatus";
    import InputDatetime from "@/components/InputDatetime.vue";
    import InputPriority from "@/components/InputPriority.vue";

    const props = defineProps<{
        task?: Task
    }>();

    const task = reactive<Task>(props.task ?? {
        id: crypto.randomUUID(),
        title: '',
        description: '',
        deadline: getNextDeadline(),
        priority: TaskPriority.medium,
        status: TaskStatus.toDo,
        repeatable: false
    });

    const creating = computed(() => props.task === undefined);

    const titleElement = useTemplateRef('title');

    const hasDeadline = ref(true);

    onMounted(() => {
        setTimeout(() => {
            titleElement.value.$el.setFocus();
        }, 20);
    });

    function getNextDeadline(): number {
        const now = Date.now();

        return (now + millisecondsInHour) - (now % millisecondsInHour);
    }

    function confirm() {
        if (!hasDeadline.value) {
            task.deadline = undefined;
        }

        modalController.dismiss(task, 'confirm');
    }

    function cancel() {
        modalController.dismiss(null, 'cancel');
    }
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button @click="cancel()">
                    <ion-icon :icon="close"/>
                </ion-button>
            </ion-buttons>

            <ion-buttons slot="end">
                <ion-button :disabled="!task.title.length" @click="confirm()">
                    <span v-if="creating">Create</span>
                    <span v-else>Save</span>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <h1 class="ion-text-center" :hidden="!creating">
            What do you need to do?
        </h1>

        <ion-list>
            <ion-item>
                <ion-input
                    v-model="task.title"
                    placeholder="Title"
                    ref="title"
                />
            </ion-item>

            <ion-item>
                <ion-input
                    v-model="task.description"
                    placeholder="Add more details..."
                />
            </ion-item>

            <ion-item>
                <ion-label class="ion-padding-end">Priority</ion-label>

                <input-priority v-model="task.priority"/>
            </ion-item>

            <ion-item>
                <ion-toggle v-model="task.repeatable" label-placement="start">Repeatable</ion-toggle>
            </ion-item>

            <ion-item-group>
                <ion-item lines="none">
                    <ion-toggle v-model="hasDeadline" label-placement="start">Deadline</ion-toggle>
                </ion-item>

                <ion-item lines="none">
                    <ion-datetime-button datetime="datetime" :disabled="!hasDeadline"/>

                    <ion-modal :keep-contents-mounted="true">
                        <input-datetime id="datetime" v-model="task.deadline"/>
                    </ion-modal>
                </ion-item>
            </ion-item-group>
        </ion-list>
    </ion-content>
</template>

<style scoped>
    ion-list {
        background-color: #0000;
    }

    ion-item {
        --background: #0000;
    }

    ion-list > * {
        padding: 0.25rem 0;
    }
</style>