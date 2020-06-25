<template>
    <div class="ion-page">
        <customHead/>

        <ion-content class="ion-padding">
            <h2>News</h2>
            <allNews :dataNews="getterAllNews.news"></allNews>
        </ion-content>

        <customFooter/>
    </div>
</template>
<script>
    import allNews from "../components/cardNews"
    import customHead from "../components/customHead"
    import customFooter from "../components/customFooter"
    import { mapActions, mapGetters} from 'vuex'
    export default {
        name:"news",
        components:{
            customFooter,
            customHead,
            allNews
        },
        computed:{
            ...mapGetters(['getterAllNews'])
        },
        methods:{
            ...mapActions(['getNews'])
        },
        beforeMount(){
            this.getNews()
        }
    }
</script>