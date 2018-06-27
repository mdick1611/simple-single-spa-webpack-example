import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import Footer from './footer.component.js';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-footer',
        template: `
            <div id="vue-footer"> 
            <Footer/> 
            </div>
        `,
        components: {
            'Footer': Footer
        },
    }
});

export function mount(props) {
    createDomElement();
    return vueLifecycles.mount(props);
}

function createDomElement() {
    let el = document.getElementById('vue-footer');

    if (!el) {
        el = document.createElement('div');
        el.id = 'vue-footer';
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