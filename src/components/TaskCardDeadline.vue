<script setup lang="ts">
    import { computed } from "vue";
    import { IonChip } from "@ionic/vue";

    const {deadline} = defineProps<{
        deadline: number
    }>();

    const label = computed(() => {

    });
</script>

<template>
    <ion-chip>
        {{ deadline }}
    </ion-chip>
</template>