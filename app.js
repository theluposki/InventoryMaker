import { store } from "./store/index.js"
import { routes } from "./routes/index.js"

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

import { NavMobile } from "./components/NavMobile.js"
import { HeaderMobile } from "./components/HeaderMobile.js"

const app = Vue.createApp({
  components: {
    HeaderMobile,
    NavMobile
  },
  data(){
    return {
      title: "MyApp Vue =D"
    }
  }
});

app.use(store);

app.use(router);

app.mount("#app");
