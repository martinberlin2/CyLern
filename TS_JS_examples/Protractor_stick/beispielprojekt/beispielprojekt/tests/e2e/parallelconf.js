var HtmlReporter = require('protractor-beautiful-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
	capabilities: {
		browserName: 'chrome',
		// This forces a restart of the browser, which we need, because otherwise all tests will be executed in the same browser instance. Restart is necessary, because some tests may fail otherwise, because they expect the page to have the state after login.
		shardTestFiles: true,
		maxInstances: 2
	},

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
    julia: 'specs/testspec.js',
    martin: 'specs/testspec2.js',
    username2 : ["specs/testspec_Kopie.js","specs/testspec2_Kopie.js"]
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