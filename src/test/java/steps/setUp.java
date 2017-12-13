package steps;

import cucumber.api.java.en.Given;


/**
 * Created by naveen.singh on 5/25/2017.
 */
public class setUp extends DriverFactory {

    String URL = "http://capdev614.uk.ba.com/travel/globalgateway.jsp/global/public/en_gb";
    //here we start the Steps which cover the feature files scenarios

    @Given("^the user able to open the BA URL and reach on the landing page$")
    public void setUp() throws Throwable {
        //DriverFactory.driver=this.driver;
        driver.get(URL);
        driver.manage().window().maximize();
        //select the language and keep the default country selected , in this case default country is "United Kingdom"

    }
}

