package stepDefinitions;

import cucumber.api.java.en.When;
import utils.basePage;

public class loginScenarioSteps extends baseStepDefs {
	
	

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
