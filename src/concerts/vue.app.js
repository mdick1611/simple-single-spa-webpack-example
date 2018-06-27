import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import Concerts from './concerts.component.js';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-concerts',
        template: `
            <div id="vue-concerts"> 
            <Concerts/> 
            </div>
        `,
        components: {
            'Concerts': Concerts
        },
    }
});

export function mount(props) {
    createDomElement();
    return vueLifecycles.mount(props);
}

function createDomElement() {
    let el = document.getElementById('vue-concerts');

    if (!el) {
        el = document.createElement('div');
        el.id = 'vue-concerts';
        document.body.appendChild(el);
    }
    return el;
}

export const bootstrap = [
    vueLifecycles.bootstrap,
];


export const unmount = [
    vueLifecycles.unmount,
];