Feature: SHOULD BE ABLE TO NAVIGATE TO FAQ PAGE

  As a end user
  I will log into Patient booking website
  and I will click on the faq link
  then i should be navigated to FAQ page

  Scenario Outline:

    Given As end user i am the Patient booking website
    When I will login by entering the "<userName>" and "<password>"
    And I will click/tap on the FAQ link
    Then I should be navigated to FAQ page
    And  I Should view page title as "FAQ"
    And I Should view all FAQS

    Examples:
      | userName                | password      |
      | yashwantrsunkara@gmail.com | Aanya@2016 |
     # | chhabra.teena@gmail.com | Bananaapps123 |
      #| chhabra.teena@gmail.com | Bananaapps123 |