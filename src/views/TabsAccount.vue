<script setup lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
    import TabPlaceholder from '@/components/TabPlaceholder.vue';
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Account</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Account</ion-title>
                </ion-toolbar>
            </ion-header>

            <tab-placeholder name="Account"/>
        </ion-content>
    </ion-page>
</template>