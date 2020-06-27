<template>
    <div class="ion-page" id="main-content">
        <customHead />
        <ion-content class="ion-padding">

            <ul class="itemsCustoms">
                <li v-for="sneaker in getterArrayRandom" :key="sneaker.id" class="itemCustom">
                    <router-link :to="{ name: 'product', params: { id: sneaker.id }}">
                        <div>
                            <h4 class="text white">{{sneaker.name}}</h4>
                            <div>
                                <img :src="sneaker.image" alt="">
                            </div>
                            <section class="white myProduct">
                                <p><b>Marque:</b> {{sneaker.brand}}</p>
                                <p class="color"><b>Couleurs</b> <br>{{sneaker.color}}</p>
                                <p><b>Prix:</b> {{sneaker.price}}€</p>
                            </section>
                        </div>
                    </router-link>
                </li>
            </ul>
            <news :dataNews="getterFiveNews.news"></news>
        </ion-content>

  </div>
</template>

<script>
    import news from "../components/cardNews"
    import customHead from "../components/customHead"
    import { mapActions, mapGetters} from 'vuex'
    export default {
        name: "home",
        computed:{
            ...mapGetters(['getterArrayRandom','getterFiveNews'])
        },
        components:{
            customHead,
            news
        },
        methods:{
            ...mapActions([
                'randomProducts','fiveNews'
            ]),
        },
        beforeMount(){
            this.randomProducts()
            this.fiveNews()
        }
    };
</script>
<style lang="scss" scoped>
    .itemsCustoms {
        display: flex;
        overflow-x: scroll;
        padding: 1rem 0;
        scroll-snap-type: x mandatory;
    }

    .itemCustom {
        flex: 1 0 250px;
        margin-left: 1.77rem;
        border-radius: 3px;
        background-color: #040032;
        scroll-snap-align: center;
        a{

            &:hover{
                text-decoration: none;
            }
            div{
                min-height: 100%;
            }
        }
    }
    ::-webkit-scrollbar-track {
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar {
        height: 6px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #3d4852;
        border-radius: 3px;
    }
    h4{
        padding: 10px;
    }
  ion-slides{
    background-color: #040032;
  }
  .color{
    padding: 0 15px;
    font-size: 15px;
  }
  .text{
    font-size: 17px;
  }
  .white{
    color: whitesmoke;
  }
  .myProduct{
    margin:15px 0;
  }
</style>