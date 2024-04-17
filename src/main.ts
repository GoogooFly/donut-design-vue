import {createApp} from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';
import {setupRouter} from './router';
import {setupStore} from './store';
import {setupGlobDirectives} from './directives';
import {registerGlobComp} from './components/registerGlobComp';

function bootstrap() {
    const app = createApp(App);

    setupRouter(app);
    setupStore(app);
    setupGlobDirectives(app);
    registerGlobComp(app);

    app.mount('#app');
}

bootstrap();