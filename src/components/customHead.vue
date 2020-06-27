<template>
    <ion-header>
        <ion-toolbar>
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <b-button class="ml-2" v-b-toggle.sidebar-variant><font-awesome-icon class="m-0" :icon="['fas', 'stream']" /></b-button>
                </div>
                <div class="d-flex align-items-center">
                    <div class="mobile">
                        <div>
                            <font-awesome-icon @click="openResearchBar" class="researchMobile" :icon="['fas', 'search']" />
                        </div>
                    </div>
                    <div class="img">
                        <img src="../assets/test.png" alt="">
                    </div>
                </div>
            </div>
        </ion-toolbar>

        <transition name="fadeHeight">
            <div v-if="statusSearch">
                <ion-searchbar @keyup.enter="researchProducts" autocomplete="off" @input="filterProducts=$event.target.value" placeholder="Rechercher" color="dark" type="text"></ion-searchbar>
            </div>
        </transition>
        <customFooter />
    </ion-header>
</template>
<script>
    import customFooter from "../components/customFooter"
    import {mapActions } from 'vuex'
    export default {
        name:"customHead",
        data(){
            return {
                statusSearch : false,
                filterProducts : null,
            }
        },
        components:{
            customFooter
        },
        methods:{
            ...mapActions(['searchProducts']),
            openResearchBar(){
                this.statusSearch = !this.statusSearch
                if (this.statusSearch === false){
                    this.filterProducts = null
                }
            },
            researchProducts(){
                if (this.filterProducts !== null){
                    const path = "/products/search/"+this.strUcFirst(this.filterProducts)
                    if (this.$route.path !== path){
                        this.$router.replace({name:'filteredProducts', params:{name:this.strUcFirst(this.filterProducts)}})
                    }
                    this.searchProducts(this.strUcFirst(this.filterProducts))
                }
                else{
                    return this.$ionic.alertController
                        .create({
                            header: 'Erreur !! 😅',
                            message: 'Entrer un nom de chaussure',
                            buttons: ['OK'],
                        })
                        .then(a => a.present())
                }
            },
            strUcFirst(a){
                return (a+'').charAt(0).toUpperCase()+a.substr(1);
            },
        }
    }
</script>
<style scoped lang="scss">
    ion-toolbar{
        --background: #ecedef;
    }
    ion-searchbar{
        background-color: #ecedef ;
    }
    .fadeHeight-enter-active, .fadeHeight-leave-active {
        transition: all 0.5s;
        max-height: 255px;
        overflow:hidden;
    }
    .fadeHeight-enter, .fadeHeight-leave-to {
        max-height: 0;
        overflow:hidden;
    }
    .mobile {
        div{
            .researchMobile {
                font-size: 25px;
                color: #343a40;
                margin-right: 8px;
            }
        }
    }
    .img{
        width: 65px;
        padding: 5px;
        img{
            max-width: 100%;
        }
    }
</style>