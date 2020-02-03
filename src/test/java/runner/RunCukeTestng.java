/**
 * 
 */
package runner;



import java.io.File;

import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;

import com.cucumber.listener.ExtentCucumberFormatter;


//import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//import cucumber.api.junit.Cucumber;

/**
 * @author Niharika
 *
 * 
 */
//@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/java/features/regloginMeddBase.feature"},
		glue = {"stepDefinitions"},
		monochrome = true,
		//tags = {"@sanity,@bvt"}
		plugin = {"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter","json:target/cucumber.json"}
				//plugin = {"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber/report.html"}

		)
public class RunCukeTestng extends AbstractTestNGCucumberTests{
	

	@BeforeClass
    public static void setup() {
	  ExtentCucumberFormatter.initiateExtentCucumberFormatter();

        // Loads the extent config xml to customize on the report.
        ExtentCucumberFormatter.loadConfig(new File("src/main/java/extent-config.xml"));

        // User can add the system information as follows
        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
        ExtentCucumberFormatter.addSystemInfo("Browser version", "v47.0.1");
        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.1");

    	    }
	
	
	

}
