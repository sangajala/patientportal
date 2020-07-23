package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginMeddBaseSteps extends baseStepDefs {
	

	
	@Given("^I navigate to meddbase login page$")
	public void i_navigate_to_meddbase_login_page() throws Throwable {

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


	@Given("^Patient logged in$")
	public void patientLoggedIn() throws Exception {
		loginpage.NavigateToUrl();
		loginpage.loginToDoctorPortal();
	}



	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String un) throws Throwable {
		loginpage.enterUserName().sendKeys(un);
	}

	@When("^I enter password  as \"([^\"]*)\"$")
	public void i_enter_password_as(String pw) throws Throwable {
		loginpage.enterPassword().sendKeys(pw);
	}

	@When("^I click on log out button$")
	public void i_click_on_log_out_button() throws Throwable {
		homepage.ClickUserIcon();
		homepage.ClickLogOut();
	}
	
	
	
}
