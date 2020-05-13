package pageObjects;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;


import org.testng.Assert;
import utils.basePage;


public class homePage extends basePage {
	
	
	
	public @FindBy(xpath = "//img[@src='assets/images/profile.jpg']")  WebElement userIcon;
	
	public @FindBy(xpath = "//a[contains(text(),' Logout')]") WebElement logOutLink;
	
	@FindBy(css = "a[ui-sref='faq']")
	private WebElement faqLink;


	private @FindBy(xpath = "//span[contains(text(),'Online Portal')]") WebElement OnlinePortalLink;
	private @FindBy(xpath="//h3[contains(text(),'Your upcoming appointments')]") WebElement homePageApptmtNotificationTitle;
	private @FindBy(xpath="//div[@class='panel-body']/table") WebElement homePageApptmtNotificationDet;
	public @FindBy(xpath = "" + "//a[contains(text(),'My account')]")  WebElement myAccounticon;

	public homePage()  {
		super();
	}
	
	
	
	
	
	
	public void ClickUserIcon(){
		userIcon.click();
	}
	
	
	public void ClickLogOut(){
		logOutLink.click();
	}

	/**
	 * Clicking on the FAQ link
	 */
	public void clickFaqLink() throws InterruptedException {
		//Waitfor.waitForElementClick(faqLink);
		//faqLink.click();
		new Actions(driver).moveToElement(faqLink).click().build().perform();


	}

	/**
	 * This method returns the current title as string for assertion
	 * @return
	 */
	public String getTheCurrent() throws InterruptedException {
		return driver.getCurrentUrl();
	}


	public void chkAppointmentNotifications(){
		try
		{
			utils.waitToLoad();
			homePageApptmtNotificationTitle.isDisplayed();
			homePageApptmtNotificationDet.isDisplayed();

		}catch(Exception e){
			Assert.fail("Notification not displayed"+e.getMessage());
		}

	}

	public int getNoOfRowsInTable(WebDriver driver){

		List rows = driver.findElements(By.xpath("//div[@class='panel-body']/table/tbody/tr/td[1]"));
		System.out.println("No of rows are : " + rows.size());
		return rows.size();
	}

	public WebElement getOnlinePortalLink() {
		return OnlinePortalLink;
	}

	public void write(WebElement label, String value) {
		label.sendKeys(value);
		try {
			Thread.sleep(3000);
		} catch (Exception e) {
			e.printStackTrace();

		}
	}
	public void Clickmyaccount(){
		utils.waitForElementClickable(driver,myAccounticon);
		myAccounticon.click();
	}



}
