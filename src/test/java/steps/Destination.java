package steps;

import cucumber.api.java.en.And;
import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;

/**
 * Created by naveen.singh on 6/7/2017.
 */

public class Destination extends DriverFactory{


    @And("^Enter the Destination HotelOnly \"([^\"]*)\"$")
    public void enterTheDestinationHotelOnly(String CITY) throws Throwable {
        String XpathFor_Destination="//input[@id='planTripHotelDestination']";
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(XpathFor_Destination)).click();
        driver.findElement(By.xpath(XpathFor_Destination)).sendKeys(CITY);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        //driver.findElement(By.xpath("//li[@name='Barcelona City']")).click();
        driver.findElement(By.xpath("//li[@gw='"+CITY+"']")).click();
    }

    @And("^Enter the Destination For Flight&Hotel \"([^\"]*)\"$")
    public void enterTheDestinationForFlightHotel(String CITY) throws Throwable {
        String XpathFor_Destination="//input[@id='planTripFlightAndHotelDestination']";
        driver.findElement(By.xpath(XpathFor_Destination)).click();
        driver.findElement(By.xpath(XpathFor_Destination)).sendKeys(CITY);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        //driver.findElement(By.xpath("//li[@name='Barcelona City']")).click();
        driver.findElement(By.xpath("//li[@gw='"+CITY+"']")).click();
    }
}




