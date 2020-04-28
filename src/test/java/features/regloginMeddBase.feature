Feature: Registration


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
      | Mobile Phone Number(required) | <Mobile Phone Number> |
    And click on Next button
    Then should  be able to see the "<Error Message>"


    Examples:
      | Test cases         | Invite code | Password                   | First Name | Last Name | Day | Month | Year | Email address         | Postcode | Mobile Phone Number | Error Message                |
      | Verify invite code |             |                            |            |           |     |       |      |                       |          |                     | Please enter an invite code  |
      | Verify name        | b0dc8       | Bananaapps123$             |            |           |     |       |      |                       |          |                     | Name isn't set.              |
      |                    | b0dc8       | Bananaapps123$             | keerthi    |           |     |       |      |                       |          |                     | Surname isn't set            |
      |                    | b0dc8       | Bananaapps123$sssdfgghh    | myneni     |  myn      |     |       |      |    keerthi.allagmail.com |       |                     | Date of birth isn't set.     |
      |                    | b0dc8       | Bananaapps123$             | myn        |  myn      | 23  |       |      |    keerthi.allagmail.co |        |                     | Date of birth isn't set.     |
      |                    | b0dc8       | Bananaapps123$             | myn        | myn       |     | Jun   |      |    keerthi.allagmail.com|        |                     | Date of birth isn't set.     |
      |                    | b0dc8       | Bananaapps123$             | myn        |   myn     |  23 |       | 1986 |                       |          |                     | Email address isn't set.     |
      |                    | b0dc8       | Bananaapps123$             | myn        | myn       | 23  | Jun   | 1986 | keerthi.allagmail.com |          |                        | Post code isn't set.         |
      |                    | b0dc8       | Bananaapps123$            | myn         |myn        | 23  |  Jun   | 1986     | keerthi.allagmail.com | tw77rw |                    | Phone number isn't set.      |
      |                    | b0dc8       | Bananaapps123$             | myn        |  myn      |  23   | Jun  | 1986     | keerthi.allagmail.com | tw77rw | 07834771592         | Email address isn't set.  |
     |                     |  b0dc8      |                             |  myn       |  myn      |23     | Jun  |1986    | keerthi.allagmail.com  | tw77rw |    07834771592      |  Password isn't set.                             |
    |                       | b0dc8      |   Banana                    |  myn      |  myn     |  23     | Jun   | 1986  |keerthi.allagmail.com |  tw77rw   |   07834771592      |  Password should be atleast 8 characters long.                             |
    |                        | b0dc8    |   Sahithi0416                |   myn     |  myn     |  23      |  Jun     | 1986 |  keerthi.allagmail.com   |  tw77rw  |    07834771592     |   This account is already registered on our system                           |