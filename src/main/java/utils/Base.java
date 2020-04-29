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
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.Before;
import pageObjects.*;

/**
 * @author Niharika
 *
 * 
 */
public class Base {

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
	public static membershipsPage membershipspage;
	public static accountdetailsPage accountdetailspage;
	public static invoicePage invoicepage;
	public static membershipEnrollment membershipenrollment;
	public static allNotificationsPage allnotificationspage;
	
	
public  WebDriver initializeDriver() throws IOException{
		
        	//data properties
   		 prop = new Properties();

   		 try{
   		//in widows pc uncomment below line for file input stream
			 
   			//FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\config\\data.properties");	 
   			FileInputStream fs = new FileInputStream("./src/main/java/config/data.properties");  // comment this line if u r using windows pc
   			
   		
   		prop.load(fs);
   		}catch(Exception e){
   		e.printStackTrace();
   		 }
        	
   		 
   	
   		String browserName = prop.getProperty("browser");
   		
		if(browserName.equals("chrome")){
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--disable-notifications");
			options.addArguments("disable-infobars");
			
			// uncomment below line in windows pc
//			System.setProperty("webdriver.chrome.driver",".\\drivers\\chromedriver.exe");
			WebDriverManager.chromedriver().setup();
		 driver = new ChromeDriver(options);

		 
		}
		else if(browserName.equals("firefox")){
			// uncomment below line in windows pc
			//System.setProperty("webdriver.gecko.driver", ".\\drivers\\geckodriver.exe");
			
			driver=new FirefoxDriver();
			
		}
		else if(browserName.equals("IE")){
			// uncomment below line in windows pc
		//System.setProperty("webdriver.ie.driver", ".\\drivers\\IEDriverServer.exe");
			DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
			caps.setCapability("ignoreZoomSetting", true);
			driver = new InternetExplorerDriver();
			
		}
    		driver.manage().window().maximize();
    		
    		waitDriver = new WebDriverWait(driver,TIMEOUT);
    		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
    		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
    		loginpage = PageFactory.initElements(driver, loginPage.class);
    		homepage = PageFactory.initElements(driver, homePage.class);
    		navbarpage = PageFactory.initElements(driver, navbarPage.class);
    		faqpage = PageFactory.initElements(driver, faqpage.class);
	invoicepage= PageFactory.initElements(driver, invoicePage.class);
	accountdetailspage= PageFactory.initElements(driver, accountdetailsPage.class);
	medicalHistoryPage=PageFactory.initElements(driver, medicalHistoryPage.class);
	bookappointment=PageFactory.initElements(driver, bookAppointment.class);
	membershipspage=PageFactory.initElements(driver,membershipsPage.class);
	membershipenrollment=PageFactory.initElements(driver,membershipEnrollment.class);
	allnotificationspage=PageFactory.initElements(driver,allNotificationsPage.class);
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
        
        public static  void tearDown(){
        	if(driver != null){
        		//driver.close();
        		driver.quit();
        	}
        	seleniumDriver = null;
        }


}
