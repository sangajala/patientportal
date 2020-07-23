Feature:End to end verification of doctor's portal

  Scenario:Successfully login to doctor’s portal
    Given doctor has launched "url"
    Then doctor enter’s valid email and password click login
    And doctor is direct to dash board

  Scenario:Verify doctor can view confirmed and completed appointments
    Given doctor is in dashboard
    Then select all appointments from appointments
    And doctor can view list of appointments with status confirmed and completed


  Scenario:Verify doctor can view Archive
    Given doctor us in dashboard
    Then doctor selects archive from appointments
    And doctor can view all completed appointments here


  Scenario:Verify appointment type video consultation
    Given doctor can view appointment in all appointments
    Then doctor selects video consultation appointment
    And  doctor clicks on video consultation
    And doctor places call to patient at the time of appointment


  Scenario:Verify video consultation end to end
    Given doctor can view appointment in all appointments
    Then doctor selects video consultation appointment
    And  doctor clicks on video consultation
    And doctor places call to patient at the time of appointment
    And doctor ends call after consultation successfully


  Scenario: Verify doctor can change password for his login
    Given  Doctor has logged into the account
    Then   Doctor selects change password
    And    Doctor enters current password
    And    Doctor enters new password
    And    Doctor re enters new password and submit


  Scenario: Verify doctor logs out of account
    Given  Doctor has logged into the application
    Then   Doctor selects log out
    And    Doctor successfully logs out of application


  Scenario:Verify doctor can’t login without user name and password
    Given doctor has launched url
    Then doctor leaves email and password field blank and click login
    And doctor gets error message enter user name and password


  Scenario: Verify doctor can’t change password with invalid credentials
    Given  Doctor has logged into the account
    Then   Doctor selects change password
    And    Doctor enters current password
    And    Doctor enters new password Qwe@1234
    And    Doctor re enters new password  qwe@1234 and submit
    And    system throws error message The password confirmation does not match.


