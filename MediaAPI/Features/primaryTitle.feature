@api @Primary_title
Feature: Primary is not null
  As a consumer of an API
  I want to validate that for each object in response title_list.primary is not null
  So I can confirm the title of each song

  @Primary_title @success
  Scenario: Validate that primary title is always available
    Given the MediaAPI endpoint
    When a Get request is made and response received
    Then the primary title should not be null
