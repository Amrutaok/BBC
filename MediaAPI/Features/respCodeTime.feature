Feature: Validate response status code and response time

  @status_code @success
  Scenario: Response Status
    Given the MediaAPI endpoint
    When a Get request is made
    Then the response status should be 200

  @response_time @success
  Scenario: Response Time
    Given the MediaAPI endpoint
    When a Get request is made
    Then the response time should be less than 1000 milliseconds
