package stepDefinitions;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.loginPage;
import utils.Base;

public class loginMeddBaseSteps extends Base{
	

	
	@Given("^I navigate to meddbase login page$")
	public void i_navigate_to_meddbase_login_page() throws Throwable {
		initializeDriver();
	   loginpage.NavigateToUrl();
	}

	@When("^I enter valid username \"([^\"]*)\"$")
	public void i_enter_valid_username(String un) throws Throwable {
		//loginPage loginpage = PageFactory.initElements(driver, loginPage.class);
		
	   loginpage.enterUserName().sendKeys(un);
	}

	@When("^I enter valid password \"([^\"]*)\"$")
	public void i_enter_valid_password(String pw) throws Throwable {
		
	    loginpage.enterPassword().sendKeys(pw);
	}

	@When("^I click on sign in button$")
	public void i_clcik_on_sign_in_button() throws Throwable {
	   
	    loginpage.ClickOnSignin();
	}

	@Then("^I should be able to login successfully$")
	public void i_should_be_able_to_login_successfully() throws Throwable {
	    
	   
	}

	
	
	
}
