<template>
    <div class="ion-page">
        <customHead />

        <ion-content class="ion-padding">
            <section class="formContact">
                <div class="backgroundInfo">
                    <div>
                        <h3>Informations Complémentaires</h3>
                        <p><b>19 rue Yves Toudic 75010 Paris</b></p>
                        <a href="tel:+33142419776">01 42 41 97 76</a>
                        <a href="mailto:contact@ecole-webstart.com">contact@ecole-webstart.com</a>
                    </div>
                </div>

                <div>
                    <h3 class="mt-2"><em>Contactez-nous !</em></h3>

                    <ion-item class="mt-1">
                        <ion-label position="floating">Nom</ion-label>
                        <ion-input id="firstName" type="text" @input="$v.contactForm.firstName.$model=$event.target.value"></ion-input>
                    </ion-item>

                    <ion-item class="my-2">
                        <ion-label position="floating">Prénom</ion-label>
                        <ion-input id="lastName" @input="$v.contactForm.lastName.$model=$event.target.value" type="text"></ion-input>
                    </ion-item>

                    <ion-item class="my-2">
                        <ion-label position="floating">Email</ion-label>
                        <ion-input id="mail" @input="$v.contactForm.mail.$model=$event.target.value" type="email"></ion-input>
                    </ion-item>

                    <ion-item class="my-2">
                        <ion-label position="floating">Objet</ion-label>
                        <ion-input id="subject" @input="$v.contactForm.subject.$model=$event.target.value" type="text"></ion-input>
                    </ion-item>

                    <ion-item class="my-3">
                        <ion-label position="stacked">Message</ion-label>
                        <ion-textarea id="message" @input="$v.contactForm.message.$model=$event.target.value"></ion-textarea>
                    </ion-item>

                    <div v-if="getterloaderContact" class="d-flex align-items-center my-3">
                        <b-spinner variant="info" label="Spinning"></b-spinner><span class="ml-2 text-info"><b>En attente d'envoie</b></span>
                    </div>

                    <ion-button @click="sendContactForm" expand="block" color="success">Envoyer</ion-button>
                </div>
            </section>

            <div class="mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.355723921852!2d2.3616560780089193!3d48.8704948933581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0950555883%3A0x25e6ea66d950d9ec!2s19%20Rue%20Yves%20Toudic%2C%2075010%20Paris!5e0!3m2!1sfr!2sfr!4v1588177807488!5m2!1sfr!2sfr" width="100%" height="200"
                        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </div>
        </ion-content>

        <customFooter />
    </div>
</template>
<script>
    import { required, email } from 'vuelidate/lib/validators'
    import customHead from "../components/customHead"
    import customFooter from "../components/customFooter"
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name:'contact',
        components:{
            customHead,
            customFooter,
        },
        data(){
            return {
                contactForm:{
                    firstName:null,
                    lastName:null,
                    mail:null,
                    subject:null,
                    message:null,
                }
            }
        },
        validations: {
            contactForm: {
                firstName:{
                    required
                },
                lastName:{
                    required
                },
                mail:{
                    required,
                    email
                },
                subject:{
                    required
                },
                message:{
                    required
                },
            }
        },
        computed:{
            ...mapGetters(['getterloaderContact','getterStatusMsg'])
        },
        methods:{
            ...mapActions(['sendMessageFromContact']),
            sendContactForm() {
                this.$v.contactForm.$touch()
                if (this.$v.contactForm.$invalid) {
                    this.error()
                }
                else {
                    this.sendMessageFromContact(this.contactForm)
                    setTimeout(()=>{
                        if (this.getterStatusMsg === true) {
                            this.contactForm.firstName = null
                            this.contactForm.lastName = null
                            this.contactForm.mail = null
                            this.contactForm.subject = null
                            this.contactForm.message = null
                            document.querySelector('#firstName').value = ""
                            document.querySelector('#lastName').value = ""
                            document.querySelector('#mail').value = ""
                            document.querySelector('#subject').value = ""
                            document.querySelector('#message').value = ""
                            this.success()
                        }
                    },1400)
                }
            },
            error(){
                return this.$ionic.alertController
                    .create({
                        header: 'Erreur !! 😅',
                        message: 'Tous les champs sont obligatoire',
                        buttons: ['OK'],
                    })
                    .then(a => a.present())
            },
            success(){
                return this.$ionic.alertController
                    .create({
                        header: 'Confirmation !',
                        message: 'Message envoyé ✔️',
                        buttons: ['OK'],
                    })
                    .then(a => a.present())
            }
        }
    }
</script>
<style scoped lang="scss">
    ion-item.item-has-focus > ion-label{
        color: #698f8a !important;
    }
    ion-item{
        --highlight-color-focused:none;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .error{
        border: 1px solid #b90000 !important;
    }
    .formContact{
        width: 100%;
        display: flex;
        flex-direction: column;
        .backgroundInfo{
            background: url("../assets/shop.jpg")no-repeat;
            width:100%;
            height: 235px;
            background-size: cover;
            div:nth-child(1){
                display: flex;
                padding: 10px;
                flex-direction: column;
                height: 100%;
                justify-content: space-evenly;
                align-items: center;
                background-color: RGBA(56, 74, 181, 0.8);
                color:whitesmoke;
                h3{
                    font-size: 20px;
                    color: gold;
                }
                p, h3{
                    text-align: center;
                    margin: 0;
                }
                a{
                    color:whitesmoke;
                    font-weight:bold;
                }
            }
        }
    }
</style>