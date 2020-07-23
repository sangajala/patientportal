package stepDefinitions;

import org.openqa.selenium.WebDriver;
import pageObjects.*;
import pageObjects.old.*;
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
    public membershipsPage membershipspage;
    public AccountdetailsPage accountdetailspage;
    public invoicePage invoicepage;
    public static Properties prop;
    public utils.utilities utils;
    public static WebDriver driver;
    public AppointmentDetails appointmentdetails;
    public ExistingAppointments existingappointments;
    public membershipEnrollment membershipenrollment;
    public allNotificationsPage allnotificationspage;


    public baseStepDefs() {
        loginpage = new loginPage();
        homepage = new homePage();
        navbarpage = new navbarPage();
        faqpage = new faqpage();
        bookappointment = new bookAppointment();
        medicalHistoryPage = new medicalHistoryPage();
        membershipspage = new membershipsPage();
        accountdetailspage = new AccountdetailsPage();
        invoicepage = new invoicePage();
        prop = utilities.loadProperties();
        utils = new utilities();
        driver = BrowserFactory.getDriver();
        existingappointments = new ExistingAppointments();
        appointmentdetails = new AppointmentDetails();
        membershipenrollment = new membershipEnrollment();
        allnotificationspage = new allNotificationsPage();
    }

}