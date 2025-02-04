<script setup lang="ts">
    import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
    import { checkmarkCircle, flash, statsChart, personCircle } from 'ionicons/icons';
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet/>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tasks" href="/tasks">
                    <ion-icon aria-hidden="true" :icon="checkmarkCircle"/>
                    <ion-label>Tasks</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="focus" href="/focus">
                    <ion-icon aria-hidden="true" :icon="flash"/>
                    <ion-label>Focus</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="insights" href="/insights">
                    <ion-icon aria-hidden="true" :icon="statsChart"/>
                    <ion-label>Insights</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="account" href="/account">
                    <ion-icon aria-hidden="true" :icon="personCircle"/>
                    <ion-label>Account</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>