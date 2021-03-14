Feature: AccessWebsite

    Scenario: User access the website
        Given user has the link to the website "visual-workout-planner.netlify.app"
        When user click on the link 
        Then user should see the main page with the muscle structures
