<script setup lang="ts">
    import { computed } from "vue";
    import { IonIcon, IonChip, IonText } from "@ionic/vue";
    import { calendarClearOutline } from "ionicons/icons";

    const {deadline} = defineProps<{
        deadline: number
    }>();

    const label = computed(() => {
        const date = new Date(deadline);
        const now = new Date(Date.now());

        const isCurrentYear = date.getFullYear() === now.getFullYear();

        const options: Intl.DateTimeFormatOptions = {
            year: isCurrentYear ? undefined : 'numeric',
            month: 'short',
            day: 'numeric'
        };

        return date.toLocaleDateString('en-US', options);
    });
</script>

<template>
    <ion-chip color="medium" outline>
        <ion-text class="ion-text-nowrap">{{ label }}</ion-text>
        <ion-icon :icon="calendarClearOutline" size="small"/>
    </ion-chip>
</template>