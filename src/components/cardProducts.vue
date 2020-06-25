<template>
    <div>
        <ion-card class="mb-4" v-for="products in productsCard" :key="products.id">
            <router-link :to="{ name: 'product', params: { id: products.id }}">
                <div class="d-flex justify-content-center align-items-center">
                    <img :src="products.image" />
                </div>
                <ion-card-header>
                    <ion-card-subtitle>{{products.brand}}</ion-card-subtitle>
                    <ion-card-subtitle>{{products.price}} €</ion-card-subtitle>
                    <ion-card-title>{{products.name}}</ion-card-title>
                </ion-card-header>
                <ion-card-content>{{products.color}}</ion-card-content>
            </router-link>
        </ion-card>
    </div>
</template>
<script>
    export default {
        name: "cardProducts",
        props:{
            productsCard:Array,
        },
    };
</script>
<style scoped lang="scss">
    ion-card-content{
        color: darkblue;
    }
    a:hover{
        text-decoration: none;
    }
</style>