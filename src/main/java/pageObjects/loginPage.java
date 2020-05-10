package pageObjects;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import org.testng.Assert;
import utils.basePage;
import utils.utilities;


public class loginPage extends basePage {
	
	//public @FindBy(xpath = "//input[@name='first_name']") WebElement textfield_FirstName;
	public @FindBy(id = "inputEmail")  WebElement userName;
	
	public @FindBy(id = "inputPassword")  WebElement passWord;
	public @FindBy(tagName = "body")  WebElement errorMessage;

	public @FindBy(xpath = "//div[contains(text(),'Sign in')]")  WebElement signIn;
	public @FindBy(xpath = "//button[contains(text(),'Next')]")  WebElement next;

	@FindBy(css="a[class='btn btn-primary btn-block ng-scope']")
	private WebElement signupButton;

	private @FindBy(xpath = "//img[@alt='Your account']")  WebElement myAccounticon;

	
	public loginPage() {
		super();
	}

	public WebElement getUserName(){
		return userName;
	}

	public WebElement getPassWord(){
		return passWord;
	}

	public WebElement getSignIn() {
		return signIn;
	}
	
	/*
	public loginPage(){
		  PageFactory.initElements(driver, loginPage.class);
		}*/
	
	
	
	public void NavigateToUrl() throws IOException {
		driver.navigate().to(prop.getProperty("url"));
	}
	
	
	
	
	
	

	public WebElement enterUserName(){
		return userName;
	}

	public WebElement enterPassword(){
		return passWord;
	}

	
	
	public void ClickOnSignin(){
		signIn.click();
	}
	public void clicksignupbutton(){

		signupButton.click();
		System.out.println("click on button");
	}

	public void enterDataAndSubmit(String key, String value) {

		if (!value.trim().equals("")) {
			if(key.equals("Month")){
				utilities utilities = new utilities();
				utilities.SelectUsingVisibleText(driver.findElement(By.xpath("//select[@ng-model='dob.month']")),value);
			}else {

				driver.findElement(By.xpath("//input[@placeholder='" + key + "']")).sendKeys(value);
			}
		}

		if(key.toLowerCase().equals("invite code")){
			driver.findElement(By.xpath("//input[@value='Submit']")).click();
		}

	}

	public void gotoNext() {
		next.click();
	}

	public String getErrorMessage() {
		return errorMessage.getText();
	}

	public boolean isUserLoggedIn(){

		try {
			System.out.println("utils : "+ utils);
			utils.waitToLoad();
			return myAccounticon.isDisplayed();
		}catch(Exception e)
		{
			Assert.fail("Patient not logged in"+ e.getMessage());
			return false;
		}
	}

	public void loginToMeddBase() {

		loginToMeddBase(prop.getProperty("username"),prop.getProperty("password"));
	}
	public void loginToMeddBase(String username,String password) {

		userName.sendKeys(username);
		passWord.sendKeys(password);
		utils.clickOnWebElement(driver,signIn);
	}
	/*
	
	public void LoginToApp(String username,String password){
		enterUsername(username);
		enterPassword(password);
		ClickOnSignin();
		
	} */
	
	
	
	
	

	
	
	

}
