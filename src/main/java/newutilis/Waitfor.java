package newutilis;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.basePage;

public class Waitfor extends basePage {

    public static void waitForElementClick(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 2000);
      //  wait.until(ExpectedConditions.elementToBeClickable(element));

    }
public  static  void  WaitForElementVisible(WebElement element){
    WebDriverWait wait = new WebDriverWait(driver, 2000);
   // wait.until(ExpectedConditions.visibilityOf(element));
}
}
