import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class FacebookLogin {
    public static void main(String[] args) {
        // Set the path to your ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "src\\drivers\\chromedriver.exe");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-notifications");

        // Create a WebDriver instance for Chrome
        WebDriver driver = new ChromeDriver(options);

        try {
            
            driver.get("https://www.facebook.com/");

            
            Thread.sleep(2000);

            
            WebElement usernameInput = driver.findElement(By.id("email"));
            usernameInput.sendKeys("64160168@go.buu.ac.th");

            
            WebElement passwordInput = driver.findElement(By.id("pass"));
            passwordInput.sendKeys("QwertyZxc1234");

            
            WebElement loginButton = driver.findElement(By.name("login"));
            loginButton.click();

            
            Thread.sleep(5000);

            WebElement createButton = driver.findElement(By.cssSelector("[aria-label='Create']"));
            createButton.click();

            // Thread.sleep(5000);

            WebElement postButton = driver.findElement(By.xpath("//*[@id='mount_0_0_R7']/div/div[1]/div/div[2]/div[5]/div[2]/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div[2]/div[1]/div/div[1]"));
            postButton.click();

            Thread.sleep(55000);
            // Print a success message
            System.out.println("Login successful!");
        } catch (Exception e) {
            // Print any errors
            e.printStackTrace();
        } finally {
            
            // Close the browser
            // driver.quit();
        }
    }
}

// run command
// javac -cp "libs/*" -Xlint:unchecked src/FacebookLogin.java
// java -cp "src;libs/*" FacebookLogin
