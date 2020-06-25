<template>
    <div>
        <ion-card class="my-4" v-for="news in dataNews" :key="news.id">
            <router-link :to="{ name: 'new', params: { id: news.id }}">
                <img :src="news.image" />
                <ion-card-header>
                    <ion-card-subtitle>{{news.release_date}}</ion-card-subtitle>
                    <ion-card-title>{{news.title}}</ion-card-title>
                </ion-card-header>
                <ion-card-content>{{news.summary}}</ion-card-content>
            </router-link>
        </ion-card>
    </div>
</template>
<script>
    export default {
        name:'cardNews',
        props:{
            dataNews:Array
        }
    }
</script>
<style scoped lang="scss">
    a:hover{
        text-decoration: none;
    }
    ion-card-content,ion-card-subtitle{
        color: #808080;
    }
</style>