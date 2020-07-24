/**
 *
 */
package runner;


import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;



import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;






import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import utils.BrowserFactory;

import utils.utilities;



@CucumberOptions(

       // features = {"src/test/java/features/bookAppointment.feature"},
        glue = {"stepDefinitions"},
        monochrome = true,
      //  tags = {"@smoke"},



        plugin = {"pretty", "html:target/cucumber", "com.cucumber.listener.ExtentCucumberFormatter", "json:target/cucumber.json"}
        //plugin = {"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber/report.html"}

)
public class RunCukeTestng extends AbstractTestNGCucumberTests {

    static Properties prop;


    @BeforeClass
    public static void setup() {
        utilities.loadReport();
        prop = utilities.loadProperties();
        BrowserFactory.getDriver();
    }

    @AfterClass
    public static void afterClass(){
        BrowserFactory.close();
    }




}
