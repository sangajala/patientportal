Feature: Verify that Questionnare section


  @question
  Scenario: Verify default message

    Given Patient is in the Patient portal homepage
    When I navigate to "Questionnaires" menu
    Then I see a message on page "There are currently no questionnaires available."
  #stepdefs in loginmedbasesteps(class)#