import * as singleSpa from 'single-spa';

singleSpa.registerApplication('vue-navbar', () =>
    import ('../navbar/vue.app.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}