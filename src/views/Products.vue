<template>
    <div class="ion-page">
        <customHead/>
        <ion-content class="ion-padding">
            <h2>Produits</h2>
            <card :productsCard="getterAllProducts.products"></card>
        </ion-content>
    </div>
</template>
<script>
    import customHead from "../components/customHead"
    import { mapActions, mapGetters} from 'vuex'
    import card from "../components/cardProducts"
    export default {
        name:'products',
        components:{
            customHead,
            card
        },
        computed:{
            ...mapGetters(['getterAllProducts'])
        },
        methods:{
            ...mapActions(['getProducts'])
        },
        beforeMount(){
          this.getProducts()
        }
    }
</script>
<style scoped lang="scss">
    .customColor{
        text-decoration: none;
    }
    ion-card-content{
        color: darkblue;
    }
</style>