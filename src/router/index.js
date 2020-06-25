import Vue from 'vue'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'
import News from '../views/News.vue'
import New from '../views/New.vue'
import Catalogue from '../views/Catalogue.vue'
import BrandProducts from '../views/BrandProducts.vue'
import Contact from '../views/Contact.vue'
import Search from '../views/Search.vue'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

  const routes = [
      {
          path: '*',
          redirect: '/'
      },
      {
            path: '/',
            name: 'home',
            component: Home
      },
      {
          path: '/products',
          name: 'products',
          component: Products
      },
      {
          path: '/news',
          name: 'news',
          component: News
      },
      {
          path: '/catalogue',
          name: 'catalogue',
          component: Catalogue
      },
      {
          path: '/contact',
          name: 'contact',
          component: Contact
      },
      {
          path: '/brand/:id/products',
          name: 'brandProducts',
          component: BrandProducts
      },
      {
          path: '/new/:id',
          name: 'new',
          component: New
      },
      {
          path: '/product/:id',
          name: 'product',
          component: Product
      },
      {
          path: '/products/search/:name',
          name: 'filteredProducts',
          component: Search,
      },
      {
          path: '/heavens',
          beforeEnter() {location.href = 'https://heavens-shop.herokuapp.com/'}
      },
  ]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
