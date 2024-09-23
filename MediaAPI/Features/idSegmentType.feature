@api @id @segment_type
Feature: Validate response status code and time
  As a consumer of an API
  I want to validate that for each object in response id is not null
  And segment_type is music
  So I can confirm each object is a song

  @id @success
  Scenario: Validate track id is not null
    Given the MediaAPI endpoint
    When a Get request is made
    Then the id field should not be null

  @segment_type @success
  Scenario: Validate segment type of all tracks is music
    Given the MediaAPI endpoint
    When a Get request is made
    Then the segment_type for each object should be music
