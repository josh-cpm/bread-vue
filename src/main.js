import { createApp } from 'vue';
import App from './App.vue';
import EditableButton from './components/EditableButton';
import TextInput from './components/TextInput';

const app = createApp(App);
app.component('EditableButton', EditableButton);
app.component('TextInput', TextInput);

app.mount('#app');
