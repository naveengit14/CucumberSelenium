@Hotel_Only @BADP-Hotel
Feature: As a End user  I want to go on BA site and add some Iteneries and complete my Booking.
  Scenario Outline: Go on the BA site and book a ticket
    Given the user able to open the BA URL and reach on the landing page
    Then Select the Country as "<Country>" and language as "<Language>"
    Then User Choose the Booking Type "<Booking_Type>"
    And  Enter the Destination HotelOnly "<CITY>"
    And Enter the CheckIn "<CheckIndate>"
    And Enter  CheckOut "<Checkoutdate>"
    Then Click On the FindHotels Button

    Examples:
      | CITY |CheckIndate|Checkoutdate|Country|Language|Booking_Type|
      |  BCN | 26/07/17   | 30/07/17   |  GB   |English |Hotel_Only  |
      |  JFK |18/07/17    | 22/07/17   |  ES   |Italiano|Hotel_Only  |

