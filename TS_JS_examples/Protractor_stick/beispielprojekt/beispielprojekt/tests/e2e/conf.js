var HtmlReporter = require('protractor-beautiful-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // specs: ['specs/testspec.js'],

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
    julia: 'specs/testspec.js',
    martin: 'specs/testspec2.js',
    username : ["specs/testspec.js","specs/testspec2.js"],
    username2 : ["specs/testspec_Kopie.js","specs/testspec2_Kopie.js"],
    promise : ["specs/testspec_promises.js"]

  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: "pretty",
        },
      })
    ),
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/screenshots'
   }).getJasmine2Reporter());
  },

};