// Empty constructor
function PluginOS() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
PluginOS.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'PluginOS', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
PluginOS.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.pluginOS = new PluginOS();
  return window.plugins.pluginOS;
};
cordova.addConstructor(PluginOS.install);
