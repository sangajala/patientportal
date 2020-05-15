package pageObjects;

import org.openqa.selenium.WebElement;
import utils.basePage;

import static org.openqa.selenium.By.xpath;

public class ExistingAppointments extends basePage {


    public boolean isAppointmentDataPresent(String data) throws Exception {


        WebElement Appointmentdata = driver.findElement(xpath("//ul[@class='list-group list-group-bordered ng-scope']/li[1]/h5"));
        String s = Appointmentdata.getText();
        System.out.println("the data is " + s);


        if (Appointmentdata.getText().contains(data)) {
            return true;
        }


        return false;
    }
}



