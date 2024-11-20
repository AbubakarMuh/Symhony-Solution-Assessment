Feature: User should be able to Login Successfully

    Scenario Outline: User should be able to access Login successfully and cart successfully
        Given I am able to login successfully
        And I am able to navigate to product page
        And I Verify that the items are sorted by Name A to Z
        Then I change the sorting to Name Z to A and I verify that items are sorted correctly
        Examples:
           | username  | password |
           |standard_user | secret_sauce |

