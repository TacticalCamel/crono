<script setup lang="ts">
    import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
    import { checkmarkCircle, flash, statsChart, personCircle, checkmarkCircleOutline, flashOutline, statsChartOutline, personCircleOutline } from 'ionicons/icons';
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet/>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tasks" href="/tasks">
                    <ion-icon aria-hidden="true" class="icon-active" :icon="checkmarkCircle"/>
                    <ion-icon aria-hidden="true" class="icon-inactive" :icon="checkmarkCircleOutline"/>
                    <ion-label>Tasks</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="focus" href="/focus">
                    <ion-icon aria-hidden="true" class="icon-active" :icon="flash"/>
                    <ion-icon aria-hidden="true" class="icon-inactive" :icon="flashOutline"/>
                    <ion-label>Focus</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="insights" href="/insights">
                    <ion-icon aria-hidden="true" class="icon-active" :icon="statsChart"/>
                    <ion-icon aria-hidden="true" class="icon-inactive" :icon="statsChartOutline"/>
                    <ion-label>Insights</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="account" href="/account">
                    <ion-icon aria-hidden="true" class="icon-active" :icon="personCircle"/>
                    <ion-icon aria-hidden="true" class="icon-inactive" :icon="personCircleOutline"/>
                    <ion-label>Account</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<style scoped>
    ion-tab-button {
        position: relative;
    }

    ion-tab-button .icon-active, ion-tab-button.tab-selected .icon-inactive {
        display: none;
    }

    ion-tab-button.tab-selected .icon-active {
        display: block;
    }

    ion-tab-button.tab-selected::after {
        content: '';
        position: absolute;
        pointer-events: none;
        bottom: 0;
        left: 50%;
        right: 0;
        width: 25%;
        transform: translateX(-50%);
        height: 3px;
        background: var(--ion-color-primary);
        border-radius: 100px 100px 0 0;
    }
</style>