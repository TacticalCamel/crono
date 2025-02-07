<script setup lang="ts">
    import { ref, watch } from "vue";
    import { IonDatetime } from "@ionic/vue";
    import { formatISO, parseISO } from "date-fns";

    const date = defineModel<number | undefined>({
        required: true
    });

    const dateString = ref(getDateString(date.value ?? 0));

    function getDateString(value: number): string {
        const date = new Date(value);

        return formatISO(date);
    }

    watch(dateString, () => {
        if(date.value) {
            date.value = parseISO(dateString.value).valueOf();
        }
    });
</script>

<template>
    <ion-datetime
        v-model="dateString"
        hour-cycle="h23"
    />
</template>