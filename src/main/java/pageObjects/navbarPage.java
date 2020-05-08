package pageObjects;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchFrameException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import org.testng.Assert;
import utils.basePage;
import utils.utilities;

public class navbarPage extends basePage {


    public @FindBy(xpath = "//span[contains(text(),'Book Appointment')]")
    WebElement bookappointment;


    public @FindBy(xpath = "//span[contains(text(),'Existing Appointments')]")
    WebElement existingappointments;





    public void ClickBookAppointment() {

        bookappointment.click();

    }


    public void ClickExistingAppointments() {

        existingappointments.click();

    }



    public navbarPage()  {
        super();
    }

    public void clickOnWebElement(WebElement element) {
        utils.waitForElementClickable(driver, element);
        element.click();
    }

    public WebElement getBookappointment() {
        return bookappointment;
    }

    public WebElement getExistingappointments() {
        return existingappointments;
    }



    public boolean VerifyBookAppointment() {
        System.out.println("in verify bookappointment");
        utilities u1 = new utilities();
        u1.waitForElementPresence(driver, By.xpath("//span[contains(text(),'Book Appointment')]"));
        return bookappointment.isDisplayed();


    }


    public void gotoMenu(String menu) throws InterruptedException {

        utils.waitToLoad();
        try {
            WebElement menuLink = driver.findElement(By.xpath("//span[contains(text(),'" + menu + "')]"));
            if (menuLink.isDisplayed()) {
                menuLink.click();
            } else {
                throw new Exception("Menu link not present " + menu);
            }
        } catch (NoSuchFrameException e) {
            Assert.fail("Menu link not present " + menu);
        } catch (java.lang.Exception e) {
            Assert.fail("Menu link not present " + menu);
        }


    }


}
