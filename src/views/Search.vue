<template>
    <div class="ion-page">
        <customHead/>
        <ion-content v-if="Object.keys(getterAllProducts).length !== 0 && getterAllProducts.data.length !==0" class="ion-padding">
            <h3>Resultat de la recherche {{this.$route.params.name}} </h3>
            <card :productsCard="getterProductFromSearch"></card>

            <ion-infinite-scroll v-if="getterAllProducts.current_page !== getterAllProducts.last_page " @ionInfinite="doRefresh($event,getterAllProducts)">
                <ion-infinite-scroll-content
                        loadingSpinner="dots"
                        loadingText="Loading more data…">
                </ion-infinite-scroll-content>
            </ion-infinite-scroll>
        </ion-content>

        <h3 v-else class="text-danger text-center">Aucun résultat !</h3>
    </div>
</template>
<script>
    import card from "../components/cardProducts"
    import customHead from "../components/customHead"
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "home",
        components: {
            customHead,
            card
        },
        computed:{
            ...mapGetters(['getterAllProducts','getterProductFromSearch'])
        },
        methods:{
            ...mapActions(['paginationPage']),
            nextPage(data){
                this.paginationPage(data.current_page += 1)
            },
            doRefresh(event,data) {
                setTimeout(() => {
                    this.nextPage(data)
                    event.target.complete();
                }, 1000);
            },
        }
    }
</script>
<style scoped lang="scss">
    .endPage {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:30px;
        .pagination {
            display: flex;
            align-items: center;
            padding: 10px;
            background-color: #ecedef;
            justify-content: space-around;
            width: 100%;
            button, span {
                margin: 0 5px;
            }
            button {
                background-color: #60837f;
                color: whitesmoke;
                border: 1px solid #60837f;
                border-radius: 10px;
                padding: 7px 15px;
                outline: none;
                &:hover{
                    background-color: #719a95;
                }
                &:disabled{
                    color: #bebebe;
                    background-color: #F9F9FC;
                    border: 1px solid #F9F9FC;
                }
            }
        }
    }
</style>