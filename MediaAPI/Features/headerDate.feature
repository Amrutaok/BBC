@api @Date
Feature: Validate the date in response header
  As a consumer of an API
  I want to validate that the Date in response header is current
  So I can confirm that the list is recent

  @Date @success
  Scenario: Validate the date in header
    Given the MediaAPI endpoint
    When a Get request is made
    Then the current date in GMT should be present
