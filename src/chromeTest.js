const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// async function chromeTest() {
//     let driver = await new Builder().forBrowser('chrome').build();

//     try {
//         await driver.get('http://150.95.25.8:6681/login');
//         console.log(await driver.getTitle());
//         await driver.wait(until.titleIs('PMRP TTTBrother'), 1000);
//         const usernameInput = await driver.findElement(By.id('username'));
//         await usernameInput.clear();
//         await usernameInput.sendKeys('ProjectIOT');
//         const passwordInput = await driver.findElement(By.id('password'));
//         await passwordInput.clear();
//         await passwordInput.sendKeys('IOT@1234');
//         const btn = await driver.findElement(By.id('btn_login'));
//         await driver.wait(until.elementIsVisible(btn), 2000);
//         await driver.wait(until.elementIsEnabled(btn), 2000);
//         await btn.click();
//         await driver.sleep(10000);
//         const sidebarLink = await driver.findElement(By.css('a[href="/Statistic_n_History"]'));
//         await driver.wait(until.elementIsVisible(sidebarLink), 2000);
//         await driver.wait(until.elementIsEnabled(sidebarLink), 2000);
//         await sidebarLink.click();
//         const subSidebarLink = await driver.findElement(By.css('a[href="/Statistic_n_History/HistoryPowerMonitor"]'));
//         await driver.wait(until.elementIsVisible(subSidebarLink), 2000);
//         await driver.wait(until.elementIsEnabled(subSidebarLink), 2000);
//         await subSidebarLink.click();
//         await driver.sleep(50000);
//     } finally {
//         await driver.quit();
//     }
// }

async function chromeTest() {
    const chromeOptions = new chrome.Options()
        .addArguments('--disable-notifications');
    
    let driver = await new Builder()
        .withCapabilities(chromeOptions)
        .forBrowser('chrome')
        .build();

    try {
        console.log('Step 1: Opening Facebook');
        await driver.get('https://www.facebook.com/');
        await driver.wait(until.titleIs('Facebook – log in or sign up'), 1000);

        console.log('Step 2: Entering username');
        const usernameInput = await driver.findElement(By.id('email'));
        await usernameInput.clear();
        await usernameInput.sendKeys('64160168@go.buu.ac.th');

        console.log('Step 3: Entering password');
        const passwordInput = await driver.findElement(By.id('pass'));
        await passwordInput.clear();
        await passwordInput.sendKeys('QwertyZxc1234');

        console.log('Step 4: Clicking login button');
        const loginButton = await driver.wait(until.elementLocated(By.css('button[data-testid="royal_login_button"]')), 10000);
        await loginButton.click();

        // console.log('Step 6: Waiting for 5 seconds');
        await driver.sleep(5000);

        console.log('Step 5: Clicking create button');
        const createButton = await driver.wait(until.elementLocated(By.css('div[class="xma1kzc"]')), 10000);
        await createButton.click();

        // await driver.sleep(5000);
        console.log('Step 6: Clicking create post button');
        const createPostButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[1]/div/div[2]/div[5]/div[2]/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div[2]/div[1]/div/div[1]')), 10000);
        await createPostButton.click();
        
        
        console.log('Step 7: Enter Text');
        const postInput = await driver.wait(until.elementLocated(By.xpath('/html/body/div[4]/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div')), 10000);
        await postInput.click();
        await postInput.sendKeys('I\'m Robot ปุบปิบ ปิบปุบ');
        
        console.log('Step 8: Clicking post button');
        const postButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div[4]/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[3]/div[2]/div')), 10000);
        await postButton.click();

        await driver.sleep(5000);
        console.log('All steps completed successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;  // Rethrow the error to indicate failure
    } finally {
        await driver.quit();
    }
}

chromeTest();

// describe('Chrome Test', () => {
//     it('should perform the Chrome test', async () => {
//         await chromeTest();
//     });
// });