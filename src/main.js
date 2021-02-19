import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VTooltip from "v-tooltip";

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    VTooltip,
    render: h => h(App)
}).$mount('#app')

Vue.use(VTooltip)