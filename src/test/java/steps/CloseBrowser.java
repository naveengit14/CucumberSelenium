package steps;

import cucumber.api.java.en.Then;

/**
 * Created by naveen.singh on 6/2/2017.
 */
public class CloseBrowser extends  DriverFactory{

   @Then("^Close the Browser$")
    public void closeTheBrowser() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       try{
           //driver.quit();
           driver.close();
           //driver=null;

       }
       catch (Exception e){
           System.out.println(e);

       }

    }
}
