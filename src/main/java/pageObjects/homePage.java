package pageObjects;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import newutilis.Waitfor;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;


import org.openqa.selenium.support.How;
import org.testng.Assert;
import utils.Base;

import static com.sun.javaws.JnlpxArgs.verify;


public class homePage extends Base {
	
	
	
	public @FindBy(xpath = "//img[@src='assets/images/profile.jpg']")  WebElement userIcon;
	
	public @FindBy(xpath = "//a[contains(text(),' Logout')]") WebElement logOutLink;
	
	@FindBy(css = "a[ui-sref='faq']")
	private WebElement faqLink;



	private @FindBy(xpath = "//span[contains(text(),'Online Portal')]") WebElement OnlinePortalLink;
	private @FindBy(xpath="//h3[contains(text(),'Your upcoming appointments')]") WebElement homePageApptmtNotificationTitle;
	private @FindBy(xpath="//div[@class='panel-body']/table") WebElement homePageApptmtNotificationDet;
	public @FindBy(xpath = "" + "//a[contains(text(),'My account')]")  WebElement myAccounticon;


	private @FindBy(css ="i.icon.wb-bell") WebElement notificationIcon;
	private @FindBy(linkText ="All notifications") WebElement AllNotificationLink;
	private @FindBy(css ="span.icon.fa.fa-home") WebElement homePageIcon;
	private @FindBy(xpath="//div[@class='panel-body']/ul/li") List<WebElement> notificationList;





	public void clickOnfirstNotification()
	{
		notificationList.get(1).click();
	}


	public void clickOnNotificationIcon()
	{
		utils.clickOnWebElement( driver,notificationIcon);
	}
	public void clickOnAllNotificationLink() throws InterruptedException {
		utils.waitToLoad();
		utils.clickOnWebElement( driver,AllNotificationLink);
	}
	public void clickOnhomePageIcon()
	{
		utils.clickOnWebElement( driver,homePageIcon);
	}

	public homePage() throws IOException {
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
		Waitfor.waitForElementClick(faqLink);
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
			Assert.assertTrue(homePageApptmtNotificationTitle.isDisplayed());
			Assert.assertTrue(homePageApptmtNotificationDet.isDisplayed());

		}catch(Exception e){
			Assert.fail("Notification not displayed"+e.getMessage());
		}

	}

	public int getNoOfRowsInTable(WebDriver driver){

		List<WebElement> rows = driver.findElements(By.xpath("//div[@class='panel-body']/ul/li"));
		System.out.println("No of notifications in panel : " + rows.size());
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





	public void reload() {
		// remember reference to current html root element
		final WebElement htmlRoot = getDriver().findElement(By.tagName("html"));

		// the refresh seems to sometimes be asynchronous, so this sometimes just kicks off the refresh,
		// but doesn't actually wait for the fresh to finish
		getDriver().navigate().refresh();

		// verify page started reloading by checking that the html root is not present anymore
		final long startTime = System.currentTimeMillis();
		final long maxLoadTime = TimeUnit.SECONDS.toMillis(20);
		boolean startedReloading = false;
		do {
			try {
				startedReloading = !htmlRoot.isDisplayed();
			} catch (Exception e) {
				startedReloading = true;
			}
		} while (!startedReloading && (System.currentTimeMillis() - startTime < maxLoadTime));

		if (!startedReloading) {
			throw new IllegalStateException("Page did not start reloading in " + maxLoadTime + "ms");
		}

		// verify page finished reloading
		verify();
	}


}
