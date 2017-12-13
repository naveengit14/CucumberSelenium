package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;

import java.io.File;

/**
 * Created by naveen.singh on 6/1/2017.
 */
public class DriverFactory {
    static File pathBinary = new File("C:\\Users\\Naveen.Singh\\firefox.exe");
   static FirefoxBinary firefoxBinary = new FirefoxBinary(pathBinary);
  static FirefoxProfile firefoxProfile = new FirefoxProfile();
    protected static WebDriver driver = new FirefoxDriver(firefoxBinary, firefoxProfile);
    //protected WebDriver driver=null;

        }
