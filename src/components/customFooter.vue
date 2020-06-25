<template>
    <div class="footer">
        <router-link to="/heavens">
            <ion-button expand="full">Site Officiel</ion-button>
        </router-link>
    </div>
</template>
<script>
    export default {
        name:"customFooter"
    }
</script>
<style scoped lang="scss">
    .footer{
        position: sticky;
        bottom: 0;
        padding: 0;
        text-align: center;
        z-index: 111;
        width: 100%;
        a{
            text-decoration: none;
            ion-button{
                --background: #60837f;
                margin:0;
            }
            &:hover{
                --background: #496360;
            }
        }
    }
</style>