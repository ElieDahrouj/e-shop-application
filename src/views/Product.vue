<template>
    <div class="ion-page" id="main-content">
        <customHead/>
        <ion-content v-if="Object.keys(getterOneProduct).length !== 0" class="ion-padding">
            <b-carousel
                    id="carousel-no-animation"
                    style="text-shadow: 0px 0px 2px #000"
                    no-animation
                    indicators
                    img-width="1024"
                    img-height="480">
                <b-carousel-slide v-for="image in getterOneProduct.images" :key="image.id" :img-src="image.image"></b-carousel-slide>
            </b-carousel>

            <h2> {{getterOneProduct.name}}</h2>
            <p><b>Marque:</b> {{getterOneProduct.brand}}</p>
            <p><b>Couleur</b><br> {{getterOneProduct.color}}</p>
            <p><b>Date de sortie</b><br> {{getterOneProduct.release_date}}</p>
            <p><b>Prix</b><br> {{getterOneProduct.price}} €</p>
            <b>Description</b>
            <p class="m-0">{{getterOneProduct.description}}</p>
            <p class="flex mt-3">
                Pour l'acheter vous pouvez aller sur le site officiel
                <a v-bind:href=" 'https://heavens-shop.herokuapp.com/products/'+getterOneProduct.id">
                    <ion-button expand="block" color="dark">Ici</ion-button>
                </a>
            </p>
        </ion-content>
        <ion-content v-else class="ion-padding">
            <div class="alert alert-danger mt-5 container"  role="alert">
                Ce produit n'existe pas, nous sommes désolé !
            </div>
        </ion-content>
    </div>
</template>
<script>
    import customHead from "../components/customHead"
    import {mapActions, mapGetters} from "vuex"
    export default {
        name:"product",
        computed:{
            ...mapGetters(['getterOneProduct']),
        },
        methods:{
            ...mapActions(['OneProduct']),
        },
        components:{
            customHead,
        },
        mounted(){
            this.OneProduct(this.$route.params.id)
        },
    }
</script>
<style scoped lang="scss">
    .flex{
        display: flex;
        flex-direction: column;
    }
    .m-0{
        text-align: justify;
        margin: 10px 0 0 0;
    }
    h2{
        color: #011e7a;
        margin: 10px 0;
    }
    b{
        color: #59c159;
    }
</style>