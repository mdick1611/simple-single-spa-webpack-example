import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import Navbar from './navbar.component.js';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-navbar',
        template: '<div id="vue-navbar"> <Navbar/> </div>',
        components: {
            'navbar': Navbar
        },
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];