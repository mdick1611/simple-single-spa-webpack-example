import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import Navbar from './navbar.component.js';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-navbar',
        template: `
            <div id="vue-navbar"> 
            <Navbar/> 
            </div>
        `,
        components: {
            'Navbar': Navbar
        },
    }
});

export function mount(props) {
    return vueLifecycles.mount(props);
}

export const bootstrap = [
    vueLifecycles.bootstrap,
];


export const unmount = [
    vueLifecycles.unmount,
];