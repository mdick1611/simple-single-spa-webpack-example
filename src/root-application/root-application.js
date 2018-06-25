import * as singleSpa from 'single-spa';

singleSpa.registerApplication('vue-navbar', () =>
    import ('src/navbar/vue.app.js'), () => true);
singleSpa.registerApplication('app-1', () =>
  import ('../app1/app1.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}