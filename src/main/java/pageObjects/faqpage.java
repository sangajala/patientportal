package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.basePage;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class faqpage  extends basePage {
     @FindBy(css = "div[class='page-header'] h1")
     private WebElement pageTitle;

     @FindBy(css = "div[class='panel-body'] p")
     private List<WebElement> allFaqs;



    public faqpage() {
        super();

    }
    public String getTitle(){
       return pageTitle.getText();

    }
    public List<String> getAllFAQSList(){
        List<String> list=new ArrayList<String>();
        for(WebElement element:allFaqs){
            String s=element.getText();
            list.add(s);

        }
return list;
    }
    /**
     * This method returns the current title as string for assertion
     * @return
     */
    public String getTheCurrent() throws InterruptedException {
        return driver.getCurrentUrl();
    }


}
