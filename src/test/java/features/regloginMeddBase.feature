Feature: Registration

@Reg
  Scenario Outline: Validations

    Given user is in login page
    And navigate to registration page
    And provide below details
      | Invite code         | <Invite code>         |
      | Password            | <Password>            |
      | First Name          | <First Name>          |
      | Last Name           | <Last Name>           |
      | Day                 | <Day>                 |
      | Month               | <Month>               |
      | Year                | <Year>                |
      | Email Address        | <Email address>       |
      | Postcode            | <Postcode>            |
      | Mobile Phone Number (required) | <Mobile Phone Number> |
    And click on Next button
    Then should  be able to see the "<Error Message>"


    Examples:
                           | Invite code | Password                   | First Name | Last Name | Day | Month | Year | Email address             | Postcode | Mobile Phone Number | Error Message                |
                           |             |                            |            |           |     |       |         |                       |          |                     | Please enter an invite code  |
                           | b0dc8       | Bananaapps123$             |            |           |     |       |         |                       |          |                     | Name isn't set.              |
                         | b0dc8       | Bananaapps123$             | keerthi    |           |     |       |         |                          |          |                     | Surname isn't set            |
                         | b0dc8       | Bananaapps123$sssdfgghh    | myneni     |  myn      |     |       |          |   indramails@gmail.com  |       |                     | Date of birth isn't set.     |
                         | b0dc8       | Bananaapps123$             | myn        |  myn      | 23  |       |          |    indramails@gmail.com  |        |                     | Date of birth isn't set.     |
                        | b0dc8       | Bananaapps123$             | myn        | myn       |     | Jun   |          |   indramails@gmail.com    |        |                     | Date of birth isn't set.     |
                        | b0dc8       | Bananaapps123$             | myn        |   myn     |  23 |  Jun   | 1986     |                          |  tw77rw |  07834771592       | Email address isn't set.     |
                          | b0dc8       | Bananaapps123$             | myn        | myn       | 23  | Jun   | 1986     | indramails@gmail.com  |          |                    | Post code isn't set.         |
                         | b0dc8       | Bananaapps123$            | myn         |myn        | 23  |  Jun   | 1986     | indramails@gmail.com  | tw77rw   |                    | Phone number isn't set.      |
                         | b0dc8       | Bananaapps123$             | myn        |  myn      |  23   | Jun  | 1986     | keerthi.allagmail.com | tw77rw | 07834771592         | Email address isn't valid.   |
                         |  b0dc8      |                             |  myn       |  myn      |23     | Jun  |1986    | indramails@gmail.com  | tw77rw |    07834771592      |  Password isn't set.      |
                         | b0dc8      |   Banana                    |  myn      |  myn     |  23     | Jun   | 1986  |indramails@gmail.com |  tw77rw   |   07834771592      | Password should be at least 8 characters long.|
                           | b0dc8    |   Sahithi0416                |   myn     |  myn     |  23      |  Jun  | 1986 | indramails@gmail.com    |  tw77rw  |    07834771592 | This account is already registered on our system  |
                          | b0dc8   |   Bananaapps123$              | mun        |  myn    |  23     |  Jun  |  1986  |indramails@gmail.com    | tw77rw | sdfghjjkkhgffghh  | The phone number includes unexpected characters.|
                          | b0dc8   |   Bananaapps123$               | myn      |  myn     | 23       | Jun   | 1986  |keerthi.allagmail.com    |tw7 7rw   | 07834771592    | Email address isn't valid.                          |
  @confirm
    Scenario Outline: To verify Patient navigated to Confirm details page
      Given user is in login page
      And navigate to registration page
      And provide below details
        | Invite code         | <Invite code>         |
        | Password            | <Password>            |
        | First Name          | <First Name>          |
        | Last Name           | <Last Name>           |
        | Day                 | <Day>                 |
        | Month               | <Month>               |
        | Year                | <Year>                |
        | Email Address        | <Email address>       |
        | Postcode            | <Postcode>            |
        | Mobile Phone Number (required) | <Mobile Phone Number> |
      And click on Next button
      Then User should be in Confirm details page
      Examples:
        | Invite code | Password       | First Name | Last Name | Day | Month | Year | Email address             | Postcode | Mobile Phone Number |
        | 1de41    |   Bananaapps123$  |   myn      | myn        | 23 | Jun   | 1986 |  keerthi@allagmail.com  | Tw7 7rw  |   07834771592  |