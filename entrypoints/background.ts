export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(function() {
      browser.tabs.create({ url: "./intro.html" });
  });
});
