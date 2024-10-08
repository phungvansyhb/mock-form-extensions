import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  extensionApi: "chrome",
  manifest: {
    permissions: ["activeTab"],
    host_permissions: ["*://*/*"],
  },
  
});
