import { createApp } from 'vue';
import App from './App.vue';
import EditableButton from './components/EditableButton';

const app = createApp(App);
app.component('EditableButton', EditableButton);

app.mount('#app');
