package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;
import utils.basePage;

import java.util.Map;

public class RegloginMeddbaseSteps extends baseStepDefs {
    @Given("^user is in login page$")
    public void user_is_in_login_page() throws Throwable {

        loginpage.NavigateToUrl();
    }

    @Given("^navigate to registration page$")
    public void navigate_to_registration_page() throws Throwable {
        loginpage.clicksignupbutton();
    }

    String value = null;

    @Given("^provide below details$")
    public void provide_below_details(DataTable datatable) throws Throwable {

        Map<String, String> testdata = datatable.asMap(String.class, String.class);

        for (Map.Entry<String, String> entry : testdata.entrySet()) {

            System.out.println("Key = " + entry.getKey() +
                    ", Value = " + entry.getValue());

            if(entry.getKey().equals("Invite code")) {
                if(entry.getValue().equals("")) {
                    value = entry.getKey();
                }
            }

                loginpage.enterDataAndSubmit(entry.getKey(), entry.getValue());


        }
        // List<Map<String, String>> Testdata= dataTable.asMaps(String.class, String.class);
        //String invitecode = Testdata.get(0).get("Invite code");
//        System.out.println("Size : " + Testdata.size());

    }

    @Given("^click on Next button$")
    public void click_on_Next_button() throws Throwable {
        if(value==null) {
            loginpage.gotoNext();
        }
    }

    @Then("^should  be able to see the \"([^\"]*)\"$")
    public void should_be_able_to_see_the(String errormessage) throws Throwable {
        Assert.assertTrue(loginpage.getErrorMessage().contains(errormessage));
    }

}