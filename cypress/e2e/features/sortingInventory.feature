Feature: Sortindg products at the Inventory page

  Scenario: Sorting products by Name A to Z
    Given A user is at the Inventory page
    When A user selects to sort products by Name A to Z
    Then The products should get sorted by Name A to Z

  Scenario: Sorting products by Name A to Z
    Given A user is at the Inventory page
    When A user selects to sort products by Name Z to A
    Then The products should get sorted by Name Z to A

  Scenario: Sorting products by Price Low to High
    Given A user is at the Inventory page
    When A user selects to sort products by Price Low to High
    Then The products should get sorted by Price Low to High

  Scenario: Sorting products by Price High to Low
    Given A user is at the Inventory page
    When A user selects to sort products by Price High to Low
    Then The products should get sorted by Price High to Low