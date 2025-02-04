<script setup lang="ts">
    import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
    import { checkmarkCircle, barbell, statsChart, personCircle  } from 'ionicons/icons';
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet/>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tasks" href="/tabs/tasks">
                    <ion-icon aria-hidden="true" :icon="checkmarkCircle"/>
                    <ion-label>Tasks</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="focus" href="/tabs/focus">
                    <ion-icon aria-hidden="true" :icon="barbell"/>
                    <ion-label>Focus</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="stats" href="/tabs/stats">
                    <ion-icon aria-hidden="true" :icon="statsChart"/>
                    <ion-label>Insights</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="account" href="/tabs/account">
                    <ion-icon aria-hidden="true" :icon="personCircle"/>
                    <ion-label>Account</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>