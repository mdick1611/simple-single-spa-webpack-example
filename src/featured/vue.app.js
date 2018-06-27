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
    createDomElement();
    return vueLifecycles.mount(props);
}

function createDomElement() {
    let el = document.getElementById('vue-featured');

    if (!el) {
        el = document.createElement('div');
        el.id = 'vue-featured';
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