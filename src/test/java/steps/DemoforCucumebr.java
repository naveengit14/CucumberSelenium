package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import java.util.concurrent.TimeUnit;


/**
 * Created by naveen.singh on 12/7/2017.
 */
public class DemoforCucumebr extends DriverFactory{
    @Given("^go to google webpage$")
    public void goToGoogleWebpage() throws Throwable {
        driver.get("https://www.google.co.in/");
        driver.manage().window().maximize();
        // Write code here that turns the phrase above into concrete actions
    }
    @Then("^search for the keyword \"([^\"]*)\"$")
    public void searchForTheKeyword(String Keyword) throws Throwable {
        driver.findElement(By.xpath("//input[@id='lst-ib']")).sendKeys(Keyword);
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//input[@id='lst-ib']")).sendKeys(Keys.RETURN);
    }

    @When("^Found the linkpage$")
    public void foundTheLinkpage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.findElement(By.xpath(".//a[@href='https://en.wikipedia.org/wiki/Cucumber']")).click();
    }

    @Then("^click on the \"([^\"]*)\"$")
    public void clickOnThe(String link) throws Throwable {
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(".//a[@href=''"+link+"]")).click();
    }
}
