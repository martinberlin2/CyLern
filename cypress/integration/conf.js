// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, run `protractor conf.js`.
exports.config = {
  // framework: 'jasmine',
  // capabilities: {
    // browserName: 'firefox'
  // },
  specs: [
    '/MartinLern/Felder/Felder.js'   //,
    //'specPageObjects.js'
  ],
  //das ist neu 
  // helloWorld: [     
    // 'helloWorld'
  //],
  // directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  // noGlobals: true
};