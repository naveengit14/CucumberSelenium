
  Feature: this is for the cucumber reporting and Demo
    @DEMO
    Scenario Outline: open a webpage and do some activity
      Given go to google webpage
      Then search for the keyword "<Keyword>"
      Then click on the "<link>"

      Examples:
      |Keyword|link|
      | cucumber| https://en.wikipedia.org/wiki/Cucumber |
      | selenium|https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)&usg=AOvVaw1yXYA0TfNZVvBYIIiTpKL3|


      @cucumberAnotherTag
      Scenario Outline: open a webpage and do some activity
        Given go to google webpage
        Then search for the keyword "<Keyword>"

        Examples:
        |Keyword|
        |interglobe|
        |facebook  |

