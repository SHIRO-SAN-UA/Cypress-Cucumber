Feature: Logging In/Out functionality

  Scenario Outline: Verify login with valid username and valid password
    Given A user is at the login page
    When A user enters a valid username "<username>" and the valid password "<password>"
    Then A user should be logged in successfully

    Examples: 
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  Scenario Outline: Verify login with locked out username and valid password
    Given A user is at the login page
    When A user enters a locked out username "<username>" and the valid password "<password>"
    Then A user should see locked out error message

    Examples: 
      | username        | password     |
      | locked_out_user | secret_sauce |

  Scenario Outline: Verify login with invalid username and invalid password
    Given A user is at the login page
    When A user enters an invalid username and an invalid password
    Then A user should see an invalid credentials error message

  Scenario Outline: Verify logout
    Given A user is logged in
    When A user clicks the logout button
    Then A user should be logged out
