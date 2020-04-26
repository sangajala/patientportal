/**
 * 
 */
package utils;

import java.util.LinkedList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.relevantcodes.extentreports.LogStatus;

/**
 * @author Niharika
 *
 * 
 */
public class utilities {
	
	
	
	

	
	
	
	
	
    /********************Explicit Wait/Expected Conditions*******************************/
	
	public void waitForElementPresence(WebDriver driver,By element)
	{
	    WebDriverWait wait = new WebDriverWait(driver,20);
	    try{
	  //  wait.until(ExpectedConditions.presenceOfElementLocated(element));
	    } catch(Exception e){
	    	
			e.printStackTrace();
	    
			Assert.assertFalse(false, "Failed the test - "+e.getMessage());
	    }
	}
	
	
	public void waitForElementVisibility(WebDriver driver,WebElement element)
	{
	    WebDriverWait wait = new WebDriverWait(driver,20);
	    try{
	   // wait.until(ExpectedConditions.visibilityOf(element));
	   
	    } catch(Exception e){
	    	
			e.printStackTrace();
	    
			Assert.assertFalse(false, "Failed the test - "+e.getMessage());
	    }
	}
	
	public void waitForlocatorVisibility(WebDriver driver,By locator)
	{
	    WebDriverWait wait = new WebDriverWait(driver,20);
	    try{
	    
	   // wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
	    } catch(Exception e){
	    	
			e.printStackTrace();
	    
			Assert.assertFalse(false, "Failed the test - "+e.getMessage());
	    }
	}
	
	
	public void islocatorInvisible(WebDriver driver,By locator)
	{
	    WebDriverWait wait = new WebDriverWait(driver,20);
	    try{
	    
	   // wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));
	    } catch(Exception e){
	    	
			e.printStackTrace();
	    
			Assert.assertFalse(false, "Failed the test - "+e.getMessage());
	    }
	}
	
	
	public void waitForElementClickable(WebDriver driver,WebElement element)
	{
	    WebDriverWait wait = new WebDriverWait(driver,20);
	    try{
	    
	   // wait.until(ExpectedConditions.elementToBeClickable(element));
	    } catch(Exception e){
	    	
			e.printStackTrace();
	    
			Assert.assertFalse(false, "Failed the test - "+e.getMessage());
	    }
	}
    
	
	//wait for element
		public WebElement waitForElement(WebDriver driver,long time,WebElement element){
			WebDriverWait wait = new WebDriverWait(driver,time);
			//
			wait.pollingEvery(5, TimeUnit.SECONDS);
			wait.ignoring(NoSuchElementException.class);
			//return wait.until(ExpectedConditions.elementToBeClickable(element));
			return element;
			
			
		}
			
		
		public void waitForEnterText(WebDriver driver,WebElement element,String text)
		{
		    WebDriverWait wait = new WebDriverWait(driver,20);
		    try{
		  //  wait.until(ExpectedConditions.textToBePresentInElement(element, text));
		    
		///    wait.until(ExpectedConditions.textToBePresentInElementValue(element, text));
		    
		   
		    
		    } catch(Exception e){
		    	
				e.printStackTrace();
		    
				Assert.assertFalse(false, "Failed the test - "+e.getMessage());
		    }
		}
		
		
		/*****************Verify element is displayed ***************/
		
		
		
		public static ExpectedCondition<Boolean> isElementDisplayed(final WebElement element){
			return new ExpectedCondition<Boolean> (){
				public Boolean apply(WebDriver driver){
					try{
						return element.isDisplayed();
					}catch(NoSuchElementException e){
						return false;
					}catch(StaleElementReferenceException e1){
						return false;
					}
				}
			};
		}
		
		
		
		//checkbox
		
		public boolean isChecboxSelected(WebElement element){
			try {
		Assert.assertTrue(element.isSelected());
			}catch (Error e) {
				
				Assert.assertFalse(false, "checkbox not selected");
			}
		return false;
		}
		

/*************************Dropdown*********************************/
	
   public String getSelectedValue(WebElement element) {
		String value = new Select(element).getFirstSelectedOption().getText();
	 	return value;
	}
	
	public void SelectUsingIndex(WebElement element,int index) {
		Select select = new Select(element);
		select.selectByIndex(index);
		
	}
	
	public void SelectUsingVisibleText(WebElement element,String text) {
		Select select = new Select(element);
		select.selectByVisibleText(text);
		}
	
	public void SelectByVisibleValue(WebElement element,String text) {
		Select select = new Select(element);
		select.selectByValue(text);
	}
	
	
	public List<String> getAllDropDownValues(WebElement locator) {
		Select select = new Select(locator);
		List<WebElement> elementList = select.getOptions();
		List<String> valueList = new LinkedList<String>();
		
		for (WebElement element : elementList) {
			
			valueList.add(element.getText());
		}
		return valueList;
	}
	
	    

	
	//wait
	public void waitToLoad() throws InterruptedException{
		Thread.sleep(5000);
	}

	
	public static void waitForPageLoad(WebDriver driver,int i) {

		driver.manage().timeouts().pageLoadTimeout(i, TimeUnit.SECONDS);

		}

	public void clickOnWebElement(WebDriver driver,WebElement element){
		try {
			waitForElementClickable(driver, element);
			//System.out.println("in click on web element"+element);
			element.click();
		}catch(Exception e){
			Assert.fail("Element not clickable"+element);
		}
	}
	public void writeToWebElement(WebElement element, String text)
	{
		element.sendKeys(text);
	}
	public boolean checkMessageIsDisplayed(WebDriver driver,String message){
		String wholeText = driver.findElement(By.tagName("body")).getText();
		//System.out.println("wholeText  : "+wholeText);
		return wholeText.contains(message);
	}

	public void click(WebDriver driver, WebElement element) {
		waitForElementClickable(driver, element);
		element.click();

	}
	public void Write(WebElement label, String value) {
		label.sendKeys(value);
		try {
			Thread.sleep(3000);
		} catch (Exception e) {
			e.printStackTrace();

		}
	}


}
