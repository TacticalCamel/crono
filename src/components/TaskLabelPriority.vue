<script setup lang="ts">
    import { computed } from "vue";
    import { IonChip } from "@ionic/vue";
    import { TaskPriority } from "@/models/TaskPriority";

    const {priority} = defineProps<{
        priority: TaskPriority
    }>();

    const label = computed<string | undefined>(() => {
        switch (priority) {
            case TaskPriority.low:
                return 'Low';
            case TaskPriority.medium:
                return 'Medium';
            case TaskPriority.high:
                return 'High';
            case TaskPriority.urgent:
                return 'Urgent';
        }
    });

    const color = computed<string | undefined>(() => {
        switch (priority) {
            case TaskPriority.low:
                return 'secondary';
            case TaskPriority.medium:
                return 'medium';
            case TaskPriority.high:
                return 'warning';
            case TaskPriority.urgent:
                return 'danger';
        }
    });
</script>

<template>
    <ion-chip :color>{{ label }}</ion-chip>
</template>