<template>
    <div class="ion-page">
        <customHead/>
        <ion-content v-if="Object.keys(getterOneNew).length !== 0" class="ion-padding">
            <h2>{{getterOneNew.title}}</h2>
            <img :src="getterOneNew.image" alt="">
            <p class="text-left mt-1"><em>Publié par {{getterOneNew.user.name}} le {{getterOneNew.release_date}}</em></p>
            <p class="m-0">{{getterOneNew.summary}}</p>
            <p class="mt-3 text-justify">{{getterOneNew.content}}</p>
        </ion-content>
        <ion-content v-else class="ion-padding">
            <div class="alert alert-danger mt-5 container"  role="alert">
                Cet article n'existe pas, nous sommes désolé !
            </div>
        </ion-content>
        <customFooter/>
    </div>
</template>
<script>
    import customHead from "../components/customHead"
    import customFooter from "../components/customFooter"
    import { mapActions, mapGetters} from 'vuex'
    export default {
        name:"news",
        components:{
            customFooter,
            customHead
        },
        computed:{
            ...mapGetters(['getterOneNew'])
        },
        methods:{
            ...mapActions(['OneNew'])
        },
        beforeMount(){
            this.OneNew(this.$route.params.id)
        }
    }
</script>
<style scoped lang="scss">
    .text-left{
        color: darkblue;
    }
</style>