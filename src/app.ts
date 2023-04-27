import { createApp, registerElement } from 'nativescript-vue';
import { RiveView } from '@nstudio/nativescript-rive';

import Home from './components/Home.vue';

registerElement('RiveView', () => RiveView);

createApp(Home).start();
