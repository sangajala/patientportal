package stepDefinitions;

import org.openqa.selenium.WebDriver;
import pageObjects.*;
import utils.BrowserFactory;
import utils.utilities;

import java.util.Properties;

public class baseStepDefs {


    public loginPage loginpage;
    public homePage homepage;
    public navbarPage navbarpage;
    public pageObjects.faqpage faqpage;
    public bookAppointment bookappointment;
    public medicalHistoryPage medicalHistoryPage;
    public membershipsPage membershipsPage;
    public AccountdetailsPage accountdetailspage;
    public invoicePage invoicepage;
    public static Properties prop;
    public utils.utilities utils;
    public static WebDriver driver;



    public baseStepDefs() {
        loginpage = new loginPage();
        homepage = new homePage();
        navbarpage = new navbarPage();
        faqpage = new faqpage();
        bookappointment = new bookAppointment();
        medicalHistoryPage = new medicalHistoryPage();
        membershipsPage = new membershipsPage();
        accountdetailspage = new AccountdetailsPage();
        invoicepage = new invoicePage();
        prop = utilities.loadProperties();
        utils = new utilities();
        driver = BrowserFactory.getDriver();

    }

}
