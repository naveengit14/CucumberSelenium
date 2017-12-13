package steps;

import cucumber.api.java.en.And;
import org.openqa.selenium.By;

/**
 * Created by naveen.singh on 6/6/2017.
 */
public class Dates extends  DriverFactory{




    @And("^Enter the CheckIn \"([^\"]*)\"$")
    public void enterTheCheckIn_Hotelonly(String CheckIndate) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.cssSelector("#checkInGO")).clear();
        driver.findElement(By.cssSelector("#checkInGO")).sendKeys(CheckIndate);
        CheckIndate=null;
    }

    @And("^Enter  CheckOut \"([^\"]*)\"$")
    public void enterCheckOut_Hotelonly(String Checkoutdate) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.cssSelector("#checkOutGO")).clear();
        driver.findElement(By.cssSelector("#checkOutGO")).sendKeys(Checkoutdate);
        Checkoutdate=null;
    }


    @And("^Enter the DepartureDate \"([^\"]*)\"$")
    public void enterTheDepartureDate(String CheckIndate) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.cssSelector("#depDateFH")).clear();
        driver.findElement(By.cssSelector("#depDateFH")).sendKeys(CheckIndate);
        CheckIndate=null;
    }

    @And("^Enter  Returndate \"([^\"]*)\"$")
    public void enterReturndate(String checkOutGO) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.cssSelector("#retDateFH")).clear();
        driver.findElement(By.cssSelector("#retDateFH")).sendKeys(checkOutGO);
        checkOutGO=null;
    }
}
