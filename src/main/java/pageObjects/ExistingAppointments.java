package pageObjects;

import org.openqa.selenium.WebElement;
import utils.basePage;

import static org.openqa.selenium.By.xpath;

public class ExistingAppointments extends basePage {


//*[@id="ng-app"]/body/div/div[2]/div[4]/ul/li[1]/text()


    // private @FindBy(xpath = "//p[@class='ng-binding']/text()")
    //List<WebElement> exAppointmentdetails;


    public boolean isAppointmentDataPresent(String data) throws Exception {


        WebElement Appointmentdata = driver.findElement(xpath("//ul[@class='list-group list-group-bordered ng-scope']/li[1]/h5"));
        String s=Appointmentdata.getText();
System.out.println("the data is "+s);

        //List<String> elements =xpath(//*[@id='ng-app']/body/div/div[2]/div[4]/ul/li[1]/div/p[1]/text())//*[@id='ng-app']/body/div/div[2]/div[4]/ul/li[1]/div/p[1]/text();


        if (Appointmentdata.getText().contains(data)) {
            return true;
        }


        return false;
    }
}



