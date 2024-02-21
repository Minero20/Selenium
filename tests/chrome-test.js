const { Builder, By, until } = require('selenium-webdriver');
const { describe, it, before, after } = require('mocha');
const chai = require('chai');

chai.should();

async function chromeTest() {
    try {
        let driver = await new Builder().forBrowser('chrome').build();

        describe('Facebook Post Test', function () {

            before(async () => {
                console.log('Step 0: Starting the test');
            });

            after(async () => {
                it('Step 1: Opening Facebook', async () => {
                    await driver.get('https://www.facebook.com/');
                    await driver.wait(until.titleIs('Facebook – log in or sign up'), 10000);
                });
            });

            it('Step 2: Entering username', async () => {
                const usernameInput = await driver.findElement(By.id('email'));
                await usernameInput.clear();
                await usernameInput.sendKeys('64160168@go.buu.ac.th');
            });

            it('Step 3: Entering password', async () => {
                const passwordInput = await driver.findElement(By.id('pass'));
                await passwordInput.clear();
                await passwordInput.sendKeys('QwertyZxc1234');
            });

            it('Step 4: Clicking login button', async () => {
                const loginButton = await driver.wait(until.elementLocated(By.css('button[data-testid="royal_login_button"]')), 10000);
                await loginButton.click();
            });

            it('Step 5: Waiting for 20 seconds', async () => {
                await driver.sleep(20000);
            });

            after(async () => {
                console.log('All steps completed successfully.');
                await driver.quit();
            });
        });
    } catch (error) {
        console.error('An error occurred:', error);
        if (driver) {
            await driver.quit();
        }
        throw error;
    }
}

chromeTest();