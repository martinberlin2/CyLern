// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor';
//
import {browser, element, by} from 'protractor';

export class AngularHomepage {
  nameInput = element(by.model('yourName'));
  greeting = element(by.binding('yourName'));

  async get(): Promise<void> {
    await browser.get('http://www.angularjs.org');
  }
/* 	--- compiled into __awaiter:
	https://stackoverflow.com/questions/47995484/whats-the-purpose-of-typescripts-awaiter
	Typescript includes the __awaiter helper because async/await is not a part of the es6/es2015 specification.
		Initial definition in ES2017. -- MDN
	If you don't want to include this helper, you need to target es2017.
 */
 /* 
	https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html
	yield: In TypeScript 3.6, the checker now knows that the correct type 
  */
  async setName(name: string): Promise<void> {
    await this.nameInput.sendKeys(name);
  }

  // getGreeting returns a native Promise<string>
  async getGreeting(): Promise<string> {
    return this.greeting.getText();
  }
}
