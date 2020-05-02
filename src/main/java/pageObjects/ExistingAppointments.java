package pageObjects;

import org.openqa.selenium.WebDriver;
import utils.Base;

public class ExistingAppointments extends Base {





public boolean isAppointmentDataPresent(String data) throws Exception {


   return utils.checkSectionWithTextExists(driver,data);
}


}
