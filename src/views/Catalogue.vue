<template>
    <div class="ion-page">
        <customHead />

        <ion-content class="ion-padding">
            <h2>Marques</h2>
            <ion-card class="mb-4" v-for="brand in getterAllBrands" :key="brand.id">
                <router-link class="customColor" :to="{ name: 'brandProducts', params: { id: brand.id }}">
                    <img :src="brand.banner" />
                    <ion-card-header>
                        <ion-card-subtitle>Produits présent: {{brand.products.length}}</ion-card-subtitle>
                        <ion-card-title>{{brand.name}}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content v-if="brand.description">{{brand.description}}</ion-card-content>
                </router-link>
            </ion-card>
        </ion-content>
    </div>
</template>

<script>
    import customHead from "../components/customHead"
    import { mapActions, mapGetters} from 'vuex'
    export default {
        name: "catalogue",
        computed:{
            ...mapGetters([
                'getterAllBrands'
            ])
        },
        components:{
            customHead,
        },
        methods:{
            ...mapActions([
                'allBrand'
            ]),
        },
        beforeMount(){
            this.allBrand()
        }
    };
</script>
<style scoped lang="scss">
    ion-card{
        transition: transform .3s;
        &:hover{
            transform: scale(1.1);
        }
    }
    a:hover {
            text-decoration: none;
    }
</style>