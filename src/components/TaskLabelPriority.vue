<script setup lang="ts">
    import { computed } from "vue";
    import { IonChip } from "@ionic/vue";
    import { getPriorityColor, getPriorityLabel } from "@/functions/Priority";
    import { TaskPriority } from "@/models/TaskPriority";

    const {priority} = defineProps<{
        priority: TaskPriority
    }>();

    const label = computed<string | undefined>(() => getPriorityLabel(priority));

    const color = computed<string | undefined>(() => getPriorityColor(priority));
</script>

<template>
    <ion-chip :color>{{ label }}</ion-chip>
</template>