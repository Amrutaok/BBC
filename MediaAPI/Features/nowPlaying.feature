@api @Now_Playing
Feature: Only one track is playing at a time
  As a consumer of an API
  I want to validate that for only one object in response offset.Now_Playing is true
  So I can confirm that only one track is plaing at a time

  @Now_Playing @success
  Scenario: Only one track is playing at a time
    Given the MediaAPI endpoint
    When a Get request is made
    Then only one track is playing
