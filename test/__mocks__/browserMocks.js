// Fetch
global.fetch = require('jest-fetch-mock');

// Browser feature mocks

var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// DOM Mocks

document.body.innerHTML = '<div id="app"></div>';
