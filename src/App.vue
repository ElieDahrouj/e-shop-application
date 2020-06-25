<template>
  <div id="app">
    <ion-app>
      <b-sidebar id="sidebar-variant" title="Menu" bg-variant="dark" text-variant="light" shadow>
        <div class="px-3 py-2">
          <ul>

            <li class="d-flex">
              <router-link class="navLink d-flex m-0 w-100" :to="{name:'home'}">
                <div class="w-50 d-flex justify-content-center align-items-center">
                  <font-awesome-icon class="size" slot="start" :icon="['fas', 'home']" />
                </div>
                <div class="w-50 d-flex justify-content-start align-items-center">
                  Accueil
                </div>
              </router-link>
            </li>

            <li class="d-flex">
              <router-link class="navLink d-flex m-0 w-100" :to="{name:'news'}">
                <div class="w-50 d-flex justify-content-center align-items-center">
                  <font-awesome-icon class="size" slot="start" :icon="['fas', 'newspaper']" />
                </div>
                <div class="w-50 d-flex justify-content-start align-items-center">
                  News
                </div>
              </router-link>
            </li>

            <li class="d-flex">
              <router-link class="navLink d-flex m-0 w-100" :to="{name:'catalogue'}">
                <div class="w-50 d-flex justify-content-center align-items-center">
                  <font-awesome-icon class="size" slot="start" :icon="['fas', 'store-alt']" />
                </div>
                <div class="w-50 d-flex justify-content-start align-items-center">
                 Catalogue
                </div>
              </router-link>
            </li>

            <li class="d-flex">
              <router-link class="navLink d-flex m-0 w-100" :to="{name:'products'}">
                <div class="w-50 d-flex justify-content-center align-items-center">
                  <font-awesome-icon class="size" slot="start" :icon="['fas', 'shoe-prints']" />
                </div>
                <div class="w-50 d-flex justify-content-start align-items-center">
                  Produits
                </div>
              </router-link>
            </li>

            <li class="d-flex">
              <router-link class="navLink d-flex m-0 w-100" :to="{name:'contact'}">
                <div class="w-50 d-flex justify-content-center align-items-center">
                  <font-awesome-icon class="size" slot="start" :icon="['fas', 'file-contract']" />
                </div>
                <div class="w-50 d-flex justify-content-start align-items-center">
                  Contact
                </div>
              </router-link>
            </li>

          </ul>
        </div>
      </b-sidebar>

      <ion-vue-router />
    </ion-app>
  </div>
</template>
<style lang="scss">
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      margin: 10px;
    }
  }
  .navLink{
    color: whitesmoke;
    font-size: 25px;
    &:hover{
      text-decoration: none;
      color: #698f8a;
    }
  }
  .size{
    font-size: 30px;
  }
  a{
    text-decoration: none;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
