import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import Featured from './featured.component.js';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-featured',
        template: `
            <div id="vue-featured"> 
            <Featured/> 
            </div>
        `,
        components: {
            'Featured': Featured
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