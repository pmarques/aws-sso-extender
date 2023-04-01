import browser from 'webextension-polyfill';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Badge from 'primevue/badge';
import DataTable from 'primevue/datatable';
import Divider from 'primevue/divider';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Listbox from 'primevue/listbox';
import MultiSelect from 'primevue/multiselect';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ColorPicker from 'primevue/colorpicker';
import Popup from '../views/popup.vue';
import extension from '../extension';
import ProfileTable from '../components/ProfileTable.vue';
import SetupSteps from '../components/SetupSteps.vue';
import LoginLinks from '../components/LoginLinks.vue';
import IamRoles from '../components/IamRoles.vue';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(Popup);
app.use(PrimeVue);
app.config.globalProperties.$browser = browser;
app.config.globalProperties.$ext = extension;
app.component('PAccordion', Accordion);
app.component('PAccordionTab', AccordionTab);
app.component('PBadge', Badge);
app.component('ColorPicker', ColorPicker);
app.component('DataTable', DataTable);
app.component('PDivider', Divider);
app.component('PListbox', Listbox);
app.component('PColumn', Column);
app.component('InputText', InputText);
app.component('MultiSelect', MultiSelect);
app.component('PrimeButton', Button);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('ProfileTable', ProfileTable);
app.component('SetupSteps', SetupSteps);
app.component('LoginLinks', LoginLinks);
app.component('IamRoles', IamRoles);
app.mount('#app');
