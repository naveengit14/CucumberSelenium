package steps;

import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

/**
 * Created by naveen.singh on 6/7/2017.
 */
public class LandingPage extends  DriverFactory {
    @Then("^Select the Country as \"([^\"]*)\" and language as \"([^\"]*)\"$")
    public void selectTheCountryAsAndLanguageAs(String Country, String Language) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Select Country_dropdown = new Select(driver.findElement(By.id("country_code")));
        Country_dropdown.selectByValue(Country);
        //now Select the Language
        Select Language_dropdown = new Select(driver.findElement(By.id("language_select")));
        Language_dropdown.selectByVisibleText(Language);
        //Click the Go Button
        driver.findElement(By.id("go_button")).click();
    }
}
