import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      arrayRandomProducts:'',
      DataFiveNews:'',
      oneProduct:"",
      oneNew:"",
      allProducts:"",
      allNews:"",
      brands:"",
      brandProducts:"",
      statusLoaderContact:false,
      statusMessage:false,
      nameDataFilter:null,
      dataPagination:""
  },
  getters:{
      getterArrayRandom(state){
      return state.arrayRandomProducts
      },
      getterFiveNews(state){
        return state.DataFiveNews
      },
      getterOneProduct(state){
        return state.oneProduct
      },
      getterOneNew(state){
          return state.oneNew
      },
      getterAllProducts(state){
        return state.allProducts
      },
      getterAllNews(state){
          return state.allNews
      },
      getterAllBrands(state){
          return state.brands
      },
      getterAllBrandProducts(state){
          return state.brandProducts
      },
      getterloaderContact(state){
          return state.statusLoaderContact
      },
      getterStatusMsg(state){
          return state.statusMessage
      },
      getterProductFromSearch(state){
          return state.dataPagination
      }
  },
  mutations: {
      randomProducts(state,data){
        return state.arrayRandomProducts = data
      },
      fiveNewsStock(state,data){
          return state.DataFiveNews = data
      },
      getOneProduct(state,data){
          return state.oneProduct = data
      },
      getOneNew(state,data){
          return state.oneNew = data
      },
      getAllProducts(state,data){
          return state.allProducts = data
      },
      getAllNews(state,data){
          return state.allNews = data
      },
      getBrands(state,data){
          return state.brands = data
      },
      getBrandsProducts(state,data){
          return state.brandProducts = data
      },
      loaderContact(state,data){
          state.statusLoaderContact = data
      },
      msgStatus(state,data){
          state.statusMessage = data
      },
      nameSearchData(state,data){
          state.nameDataFilter = data
      },
      getProductPagination(state,data){
          state.dataPagination = data
      }
  },
  actions: {
      randomProducts({commit}){
        axios.get("https://heavens-shop.herokuapp.com/api/products?sort=random&max=10")
          .then(response =>{
              commit('randomProducts',response.data.products)
          })
      },
      fiveNews({commit}){
          axios.get("https://heavens-shop.herokuapp.com/api/fiveNews")
              .then(response =>{
                  commit('fiveNewsStock',response.data)
              })
      },
      getProducts({commit}){
          axios.get("https://heavens-shop.herokuapp.com/api/products")
              .then(response =>{
                  commit('getAllProducts',response.data)
              })
      },
      getNews({commit}){
          axios.get("https://heavens-shop.herokuapp.com/api/news")
              .then(response =>{
                  commit('getAllNews',response.data)
              })
      },
      OneProduct({commit},id){
          axios.get("https://heavens-shop.herokuapp.com/api/product/"+id)
              .then(response =>{
                  commit('getOneProduct',response.data.product)
              })
      },
      OneNew({commit},id){
          axios.get("https://heavens-shop.herokuapp.com/api/news/"+id)
              .then(response =>{
                  console.log(response.data)
                  commit('getOneNew',response.data.new)
              })
      },
      allBrand({commit}){
          axios.get("https://heavens-shop.herokuapp.com/api/brands")
              .then(response =>{
                  commit('getBrands',response.data.brands)
              })
      },
      allBrandProducts({commit},id){
          axios.get("https://heavens-shop.herokuapp.com/api/brands/"+id+"/products")
              .then(response =>{
                  commit('getBrandsProducts',response.data.brand)
              })
      },
      async sendMessageFromContact({commit},object){
          commit('loaderContact', true)
          await axios.post("https://heavens-shop.herokuapp.com/api/contact",{firstName:object.firstName, lastName : object.lastName,
              mail:object.mail, subject:object.subject, message:object.message} )
              .then(() =>{
                  commit('loaderContact', false)
                  commit('msgStatus', true)
              })
      },
      searchProducts({commit},nameData){
          axios.get("https://heavens-shop.herokuapp.com/api/products?search="+nameData)
              .then(response => {
                  commit('getAllProducts',response.data.products)
                  commit('getProductPagination',response.data.products.data)
                  commit('nameSearchData',nameData)
              })
      },
      paginationPage({commit,state},page){
          axios.get("https://heavens-shop.herokuapp.com/api/products?page="+page+"&search="+state.nameDataFilter)
              .then(response => {
                  commit('getAllProducts',response.data.products)
                  response.data.products.data.forEach(e =>state.dataPagination.push(e))
              });
      },
  },
})
