package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.basePage;

public class logintoapplicationsteps extends baseStepDefs {
	
	
	
	@Given("^user navigates to meddbase login page$")
	public void user_navigates_to_meddbase_login_page() throws Throwable {

		loginpage.NavigateToUrl();
	    
	}

	@When("^I enter user name as \"([^\"]*)\"$")
	public void i_enter_user_name_as(String un) throws Throwable {
	   loginpage.enterUserName().sendKeys(un);
	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String pw) throws Throwable {
		loginpage.enterPassword().sendKeys(pw);
	}
	
	
	@When("^I click on Submit button$")
	public void i_click_on_Submit_button() throws Throwable {
	    loginpage.ClickOnSignin();
	}

	@Then("^I should be directed to home page$")
	public void i_should_be_directed_to_home_page() throws Throwable {
	    navbarpage.VerifyBookAppointment();
	}


}
