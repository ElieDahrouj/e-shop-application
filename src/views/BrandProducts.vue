<template>
    <div class="ion-page">
        <customHead />

        <ion-content v-if="Object.keys(getterAllBrandProducts).length !== 0" class="ion-padding">
            <img :src="getterAllBrandProducts.banner" alt="">
            <h3 class="mt-2">{{getterAllBrandProducts.name}}</h3>
            <p :v-if="getterAllBrandProducts.description">{{getterAllBrandProducts.description}}</p>
            <card :productsCard="getterAllBrandProducts.products"></card>
        </ion-content>
        <ion-content v-else class="ion-padding">
            <div class="alert alert-danger mt-5 container"  role="alert">
                Cette marque n'existe pas, nous sommes désolé !
            </div>
        </ion-content>
    </div>
</template>
<script>
    import card from "../components/cardProducts"
    import customHead from "../components/customHead"
    import { mapActions, mapGetters} from 'vuex'
    export default {
        name: "brandProducts",
        computed:{
            ...mapGetters([
                'getterAllBrandProducts'
            ])
        },
        components:{
            customHead,
            card
        },
        methods:{
            ...mapActions([
                'allBrandProducts'
            ]),
        },
        beforeMount(){
            this.allBrandProducts(this.$route.params.id)
        }
    };
</script>