package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.basePage;

public class AppointmentDetails extends basePage {

    private @FindBy(xpath = "//h4[@class='ng-binding']")
    WebElement appointmentType;
    private @FindBy(xpath = "//p[@class='ng-binding']")
    WebElement appointmentSchedule;
    private @FindBy(xpath = "//strong[@class='ng-binding']")
    WebElement appointmentSite;

    private @FindBy(xpath = "//span[@ng-show='appointmentData.Clinician.FullName']")
    WebElement appointmentClinician;
    private @FindBy(xpath = "//span[@ng-show='appointmentData.Invoice.TotalGross']")
    WebElement appointmentPrice;

public String getAppointType(){
    return appointmentType.getText();
}
    public String getAppointSchedule(){
        return appointmentSchedule.getText();
    }
    public String getAppointmentSite(){
        return appointmentSite.getText();
    }
    public String getAppointmentClinician(){
        return appointmentClinician.getText();
    }
    public String getAppointmentPrice(){
        return appointmentPrice.getText();
    }

}
