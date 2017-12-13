package steps;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by naveen.singh on 6/9/2017.
 */
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features/",
                     monochrome = false,
                    tags = "@cucumberAnotherTag",
                    plugin = {"pretty", "html:target/htmlreport/",
                    "json:target/Cukes/cucumber.json",
                    "junit:target/Cukes/Junit.xml"})


public class RunFeaturesTest {

}
