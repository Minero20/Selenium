package seldocker;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class ChromeTest {
	
	public static void main(String[] args) throws MalformedURLException {
        String browser = System.getProperty("webdriver.chrome.driver", "C:\\Users\\Asus\\OneDrive\\Documents\\c0De\\Selenium\\src\\drivers\\chromedriver.exe");
		URL url = new URL("http://localhost:4444/wd/hub");
		DesiredCapabilities cap = new DesiredCapabilities();

        if (browser.contains("chrome")) { // Corrected typo in "chrome"
            cap.setBrowserName("chrome");
            cap.setPlatform(Platform.LINUX);
        }

        // Use ChromeOptions to set capabilities for Chrome
        ChromeOptions options = new ChromeOptions();
        options.merge(cap);

		WebDriver driver = new RemoteWebDriver(url, options);
		// WebDriver driver = new ChromeDriver();
		driver.get("https://www.w3schools.com");
		System.out.println(driver.getTitle());
		driver.quit();
	}
}
