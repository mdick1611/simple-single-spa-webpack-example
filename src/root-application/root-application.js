import * as singleSpa from 'single-spa';

singleSpa.registerApplication('vue-navbar', () =>
    import ('../navbar/vue.app.js'), () => true);

singleSpa.registerApplication('vue-featured', () =>
    import ('../featured/vue.app.js'), () => true);

singleSpa.registerApplication('vue-concerts', () =>
    import ('../concerts/vue.app.js'), () => true);

singleSpa.registerApplication('vue-footer', () =>
    import ('../footer/vue.app.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}