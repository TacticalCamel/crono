<script setup lang="ts">
    import { IonSegment, IonSegmentButton } from "@ionic/vue";
    import { getPriorityColor, getPriorityLabel } from "@/functions/Priority";
    import { TaskPriority } from "@/models/TaskPriority";

    const model = defineModel<TaskPriority>({
        required: true
    });

    function getPriorityStyle(priority: TaskPriority) {
        return {
            '--indicator-color': `var(--ion-color-${getPriorityColor(priority)})`,
            '--color-checked': `var(--ion-color-${getPriorityColor(priority)}-contrast)`
        };
    }
</script>

<template>
    <ion-segment v-model="model" mode="ios">
        <ion-segment-button
            mode="ios"
            v-for="priority in [TaskPriority.low, TaskPriority.medium, TaskPriority.high, TaskPriority.urgent]"
            :value="priority"
            :style="getPriorityStyle(priority)"
            v-text="getPriorityLabel(priority)"
        />
    </ion-segment>
</template>

<style scoped>

</style>