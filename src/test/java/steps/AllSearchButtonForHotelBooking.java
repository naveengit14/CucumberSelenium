package steps;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;

/**
 * Created by naveen.singh on 6/6/2017.
 */
public class AllSearchButtonForHotelBooking extends DriverFactory{
    @Then("^Click On the FindHotels Button$")
    public void clickOnTheFindHotelsButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.cssSelector("#hotelSearchButton")).click();


    }




    @Then("^Click On the Find FlightHotel Button$")
    public void clickOnTheFindFlightHotelButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.cssSelector("#flightsAndHotelSearchButton")).click();
    }
}
