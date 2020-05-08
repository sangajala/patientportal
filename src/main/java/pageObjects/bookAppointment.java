package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import utils.basePage;

import java.util.List;

public class bookAppointment extends basePage {

    //Page Objects
    private WebElement payerType;
    private WebElement appointmentType;
    //  private @FindBy(xpath = "//ul[@class='list-group list-group-bordered ng-scope']/li") WebElement searchResultsList;
    // private  @FindBy(xpath = "//*[id=\"ng-app\"]/body/div[1]/div[2]/div[4]/div[2]/ul[1]/li") WebElement list;
    private List<WebElement> searchResultsList;


    // private @FindBy(xpath="//button[contains(text(),'Book Appointment')]") WebElement bookApptmtBtn;

    private @FindBy(xpath = "//div[@class='ng-scope']/div")
    WebElement apptmtDetMsg;

    private @FindBy(xpath = "//button[contains(text(),'Search')]")
    WebElement searchBtn;

    private @FindBy(xpath = "//p[@class='ng-scope']")
    WebElement apptmtFiltersMsg;
    private @FindBy(xpath = "//p[@class='ng-binding']")
    WebElement bookingCompleteMsg;

    public WebElement getBookAppointmentBtn() {
        return bookAppointmentBtn;
    }

    private @FindBy(xpath = "//div[@class='ng-scope']/button[3]")
    WebElement bookAppointmentBtn;

    private @FindBy(xpath = "//li[contains(text(),'Preferred Clinician')]")
    WebElement preferredClinician;
    private @FindBy(xpath = "//li[contains(text(),'Preferred Site')]")
    WebElement preferredSite;
    private @FindBy(xpath = "//li[contains(text(),'Preferred Time & Date')]")
    WebElement preferredTimeDate;
    private @FindBy(xpath = "//button[contains(text(),'Select site')]")
    WebElement selectSiteBtn;
    private @FindBy(xpath = "//input[@placeholder='dd/mm/yyyy']")
    WebElement selectedDate;
    private @FindBy(xpath = "//button[contains(text(),'Confirm Time & Date')]")
    WebElement confirmTimeNDateBtn;
    private @FindBy(xpath = "//button[contains(text(),'Cancel Appointment')]")
    WebElement cancelApptmtBtn;


    private @FindBy(xpath = "//p[contains(text(),'In the list below you will find your existing appo')]")
    WebElement existingApptmtMsg;

    private @FindBy(xpath = "//strong[contains(text(),'Cancellation fee:')]")
    WebElement cancelFeeMsg;

    // WebElement for Cancel Appointment on cancel info page
    private @FindBy(xpath = "//button[contains(text(),'Cancel appointment')]")
    WebElement cancelApptmtBtn2;
    //Webelement for cancel appointment confirmation message
    private @FindBy(xpath = "//div[@ng-show='cancelConfirm']")
    WebElement cancelConfirmMsg;

    //Getters for  Page objects
    public WebElement getBookingCompleteMsg() {
        return bookingCompleteMsg;
    }

    public WebElement getSearchBtn() {
        return searchBtn;
    }

    public WebElement getApptmtDetMsg() {
        return apptmtDetMsg;
    }

    public WebElement getApptmtFiltersMsg() {
        return apptmtFiltersMsg;
    }

  /*  public WebElement getBookApptmtBtn() {
        return bookApptmtBtn;
    }*/

    public WebElement getExistingApptmtMsg() {
        return existingApptmtMsg;
    }


    public WebElement getCancelApptmtBtn() {
        return cancelApptmtBtn;
    }

    public WebElement getCancelFeeMsg() {
        return cancelFeeMsg;
    }

    public WebElement getCancelApptmtBtn2() {
        return cancelApptmtBtn2;
    }

    public WebElement getCancelConfirmMsg() {
        return cancelConfirmMsg;
    }

    public WebElement getPreferredClinician() {
        return preferredClinician;
    }

    public WebElement getPreferredSite() {
        return preferredSite;
    }

    public WebElement getPreferredTimeDate() {
        return preferredTimeDate;
    }

    public void choosePayerType(String pType) {
        //make sure the pType which is sent through examples in feature file  is exactly the same as it is displayed in the webpage
        payerType = driver.findElement(By.xpath("//li[contains(text(),'" + pType + "')]"));
        utils.clickOnWebElement(driver, payerType);
    }

    public void chooseAppointmentType(String aType) {
        try {
            appointmentType = driver.findElement(By.xpath("//h5[contains(text(),'" + aType + "')]"));
        } catch (Exception e) {
            Assert.fail("unable to locate the element" + aType);
        }
        utils.clickOnWebElement(driver, appointmentType);
    }

    public void navigateApp(String arg0, WebElement element) {
        System.out.println("in navigateapp" + arg0);
        try {
            utils.waitToLoad();
            element.isDisplayed();
        } catch (Exception e) {
            Assert.fail("WebElement not displayed");
        }
        //utils.waitForElementPresence(driver,By.xpath("//p[@class='ng-scope']"));
        Assert.assertTrue(utils.checkMessageIsDisplayed(driver, arg0));
    }

    public List<WebElement> getsearchResults() {
        return driver.findElements(By.xpath("//ul[@class='list-group list-group-bordered ng-scope']/li"));
    }

    public void searchResultsDisplayed() {
        searchResultsList = getsearchResults();
        System.out.println("Size of List : " + searchResultsList.size());
        Assert.assertTrue(((searchResultsList.size())) > 1);

    }

    public void clickOnSpecificAvailableAppointment(int pos) {
        utils.clickOnWebElement(driver, searchResultsList.get(pos - 1));

    }

    public void choosePreferredClinicianAs(String clinician) {

        try {
            utils.waitToLoad();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(By.xpath("//li[contains(text(), '" + clinician + "')]"));
        System.out.println("in choose prefereed clinician " + element);
        // element.click();
        utils.clickOnWebElement(driver, element);

    }

    public void choosePreferredSiteAs(String site) {
        //not selecting by site as there is only one site (work location)
        try {
            utils.waitToLoad();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = driver.findElement(By.xpath("//li[@ng-click=\"siteDetails(site,'bookAppointment-siteDetails')\"]"));
        utils.clickOnWebElement(driver, element);
        selectSiteBtn.click();
    }

    public void choosesPreferredTimeAndDateAs(String time, String date) {
        WebElement selectedTime = driver.findElement(By.xpath("//button[contains(text(),'" + time + "')]"));
        selectedTime.click();
        selectedDate.clear();
        selectedDate.sendKeys(date);
        try {
            utils.waitToLoad();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        selectedDate.sendKeys(Keys.TAB);
        try {
            utils.waitToLoad();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        confirmTimeNDateBtn.click();

        //JavascriptExecutor executor = (JavascriptExecutor)driver;
        //executor.executeScript("arguments[0].click();", confirmTimeNDateBtn);

    }


         /*   if(payerType.isDisplayed()){
                payerType.click();
            }
            else {
                throw new Exception("Menu link not present "+menu);
            }
        }
        catch (NoSuchFrameException e){
            Assert.fail("Menu link not present "+menu);
        }
        catch (java.lang.Exception e){
            Assert.fail("Menu link not present "+menu);
        }*/

}

