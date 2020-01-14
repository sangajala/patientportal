package newutilis;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.Base;

public class Waitfor extends Base {

    public static void waitForElementClick(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 2000);
        wait.until(ExpectedConditions.elementToBeClickable(element));

    }
public  static  void  WaitForElementVisible(WebElement element){
    WebDriverWait wait = new WebDriverWait(driver, 2000);
    wait.until(ExpectedConditions.visibilityOf(element));
}
}
