package steps.Hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import steps.DriverFactory;

/**
 * Created by Naveen.Singh on 6/12/2017.
 */

public class takeScreenshot extends DriverFactory {
    @After
    public void takeScreenshot(Scenario scenario) {
        final byte [] screenshot =((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
       // String scenarioname=scenario.getName()
        scenario.write(scenario.getName());
        scenario.embed(screenshot,"image/png");


    }
    //@After
    //public void attachScreenshotToReport(Scenario scenario) {
      //  byte[] screenshot = ((RemoteWebDriver) driver).getScreenshotAs(OutputType.BYTES);
      //  scenario.write("taking screen shot by runner class method");
      //  scenario.embed(screenshot, "image/png");
   // }

}
