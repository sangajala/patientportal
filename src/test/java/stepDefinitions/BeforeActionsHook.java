/**
 * 
 */
package stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.Before;
import pageObjects.loginPage;
import utils.Base;

/**
 * @author Niharika
 *
 * 
 */
public class BeforeActionsHook {

	public WebDriver driver;
	
	@Before
	public static void setUp(){
		
		Base.setUpDriver();
		
		
	}

}
