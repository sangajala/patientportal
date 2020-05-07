/**
 * 
 */
package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.Before;
import pageObjects.*;
import java.net.URL;

/**
 * @author Niharika
 *
 * 
 */
public class Base {

	private static final int MAX_TIMEOUT = 60;
	public static final String USERNAME = "arunap2";
	public static final String AUTOMATE_KEY = "QEpPgxrhUTV9AiHwsLvo";
	public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";

	public utilities utils = new utilities();
	
	//class reference
	private static Base seleniumDriver;
	
	//initialize webdriver
	public static WebDriver driver;
	
	//webdriver wait
	private static WebDriverWait waitDriver;
	
	public static Properties prop;
	public static Properties OR;
	//timeouts
	private final static int TIMEOUT = 30;
	private final static int PAGE_LOAD_TIMEOUT = 30;
	public static loginPage loginpage;
	public static homePage homepage;
	public static navbarPage navbarpage;
	public static pageObjects.faqpage faqpage;
	public static bookAppointment bookappointment;
	public static medicalHistoryPage medicalHistoryPage;
	public static membershipsPage membershipsPage;
	public static accountdetailsPage accountdetailspage;
	public static invoicePage invoicepage;
	
	
public  WebDriver initializeDriver() throws IOException{
   		 prop = new Properties();
   		 try{
   			//FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\config\\data.properties");	 
   			FileInputStream fs = new FileInputStream("./src/main/java/config/data.properties");  // comment this line if u r using windows pc
   		prop.load(fs);
   		}catch(Exception e){
   		e.printStackTrace();
   		 }
   		String browserName = prop.getProperty("browser");
	driver = BrowserFactory.getDriver();
		//if(browserName.equals("chrome")){
		//	ChromeOptions options = new ChromeOptions();
		//	options.addArguments("--disable-notifications");
		//	options.addArguments("disable-infobars");
		//	WebDriverManager.chromedriver().setup();
		// driver = new ChromeDriver(options);
	//	}
//	if(browserName.equals("browserfactory")){
	//	DesiredCapabilities caps = new DesiredCapabilities();
	//	caps.setCapability("os", "Windows");
	//	caps.setCapability("os_version", "10");
	//	caps.setCapability("browser", "Edge");
	//	caps.setCapability("browser_version", "81.0");
	//	caps.setCapability("browserstack.local", "false");
	//	caps.setCapability("browserstack.selenium_version", "3.5.2");
	//	driver = new RemoteWebDriver(new URL(URL),caps);
	//}
		//else if(browserName.equals("firefox")){
		//	driver=new FirefoxDriver();
			
		//}
	//	else if(browserName.equals("IE")){
		//	DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
		//	caps.setCapability("ignoreZoomSetting", true);
		//	driver = new InternetExplorerDriver();
			
		//}
	try {
		driver.manage().window().maximize();
		waitDriver = new WebDriverWait(driver, TIMEOUT);
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
	} catch (NoSuchSessionException exception){
		driver.quit();
		driver = null;
		driver = BrowserFactory.getDriver();
	}
    		loginpage = PageFactory.initElements(driver, loginPage.class);
    		homepage = PageFactory.initElements(driver, homePage.class);
    		navbarpage = PageFactory.initElements(driver, navbarPage.class);
    		faqpage = PageFactory.initElements(driver, faqpage.class);
    		invoicepage = PageFactory.initElements(driver, invoicePage.class);
	        bookappointment = PageFactory.initElements(driver, bookAppointment.class);
	       medicalHistoryPage=PageFactory.initElements(driver, medicalHistoryPage.class);
	return driver;

    		}

        public void loginToMeddBase(String username,String password)
    	{
    		driver.findElement(By.id("inputEmail")).sendKeys(prop.getProperty("username"));
    		driver.findElement(By.id("inputPassword")).sendKeys(prop.getProperty("password"));
    		driver.findElements(By.xpath("//div[contains(text(),'Sign in')]"));
    			
    	}
        public  void openPage(String url){
        	driver.get(url);
        	
        }
        
        public static  WebDriver getDriver(){
        	return driver;
        }
        public static void setUpDriver(){
        	
        	if(seleniumDriver == null){
        		seleniumDriver = new Base();
        	}
        }
        
        public static  void tearDown() {
			if (driver != null) {
				//driver.close();
				driver.quit();
				driver = null;   //added this line
			}
			seleniumDriver = null;
		}

}
