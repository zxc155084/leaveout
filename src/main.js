import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import AppSdu from "./AppSdu.vue";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");

const appSdu = createApp(AppSdu);
appSdu.use(ElementPlus);
appSdu.mount("#appSdu");
