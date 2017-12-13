@Flight+Hotel @BADP-DP
Feature: As a End user I want to go on BA site and add some Iteneries and complete my Booking for BADP Dynamic packaging
Scenario Outline: Go on the BA site and book a ticket for BADP DP
Given the user able to open the BA URL and reach on the landing page
Then Select the Country as "<Country>" and language as "<Language>"
Then User Choose the Booking Type "<Booking_Type>"
And  Enter the Destination For Flight&Hotel "<CITY>"
And Enter the DepartureDate "<CheckIndate>"
And Enter  Returndate "<Checkoutdate>"
Then Click On the Find FlightHotel Button

Examples:
| CITY |CheckIndate|Checkoutdate|Country|Language|Booking_Type|
|  BCN | 22/07/17  | 28/07/17   |  GB   |English |Flight+Hotel|

  @CucumberReport
  Scenario: this is for cucumber report
    Given the user able to open the BA URL and reach on the landing page

