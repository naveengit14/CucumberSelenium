package steps;

import cucumber.api.java.en.Then;
import org.openqa.selenium.By;

/**
 * Created by naveen.singh on 6/7/2017.
 */
public class BookingType extends DriverFactory{

    @Then("^User Choose the Booking Type \"([^\"]*)\"$")
    public void userChooseTheBookingType(String Booking_Type) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String XpathFor_BookingType;

        switch(Booking_Type)
        {

            case "Hotel_Only":
            XpathFor_BookingType="//*[@id=\"hotelsTab\"]/a/p";
            break;
            case "Flight+Hotel":
                XpathFor_BookingType="//*[@id=\"planTripTabs\"]/ul/li[2]/a";
                break;
            case "Flight+Car":
                XpathFor_BookingType="Somthing";
                break;
            case "Car":
                XpathFor_BookingType="Somthing";
                break;
            case "CI":
                XpathFor_BookingType="Somthing";
                break;
            default:
                throw new IllegalArgumentException("Invalid Booking type: " + Booking_Type);
        }
        driver.findElement(By.xpath(XpathFor_BookingType)).click();
    }
}

