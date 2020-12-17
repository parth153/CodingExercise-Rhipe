Feature: Sign Up functionality for Rhipe Program Officer

    As a Rhipe program Officer, I want to be able to fill the sign up form with details

    Scenario: Sign up Rhipe customer successfully
        Given the Rhipe customer is on sign up page
        Then the customer verifies "Business Name Label" is "mandatory" field with "*"
        Then the customer fills in "Business Name" as "Coding, Test - (Test & Automation ^ Analyst)"
        Then the customer fills in "Entity ID" as "555000555"
        Then the customer fills in "Address Line 1" as "(P.O.) Box 45"
        Then the customer fills in "Address Line 2" as "25-90A Richmo H'way"
        Then the customer fills in "Address Line 3" as "Attn. To - Mr. Parth Parikh"
        Then the customer fills in "City" as "Melbourne"
        Then the customer fills in "State" as "VIC"
        Then the customer selects "Country" as "Hong Kong"
        Then the customer fills in "PostCode" as "30290"
        Then the customer fills in "Main Phone" as "+614900151670"
        Then the customer fills in "Fax" as "03 98959000"
        Then the customer fills in "Website" as "https://www.rhipe.com/"
        Then the customer fills in "Email" as "parthparikhce@gmail.com"
        Then the customer selects "Hear about Rhipe" as "Web Search"
        Then the customer selects "Industry Type" as "ERP Solution Providers"
        Then the customer sees "Use a different address for billing?" is "unchecked"
        When the customer checks "Use a different address for billing?"
        Then the customer sees "Billing Address Information"
        Then the customer fills in "Billing Address Line 1" as "LOT 30-40"
        Then the customer fills in "Billing Address Line 2" as "80 L'acombe Avenue"
        Then the customer fills in "Billing Address Line 3" as " "
        Then the customer fills in "Billing City" as "Truganina"
        Then the customer fills in "Billing State" as "New South Wales"
        Then the customer selects "Billing Country" as "Australia"
        Then the customer fills in "Billing PostCode" as "2016"
        Then the customer fills in "Authorised Signatory First Name" as "P'arth"
        Then the customer fills in "Authorised Signatory Last Name" as "Parikh"
        Then the customer fills in "Authorised Signatory Direct Phone" as "0380019001"
        Then the customer fills in "Authorised Signatory Job Title" as "Test Manager"
        Then the customer fills in "Authorised Signatory Email" as "test.manager@rhipe.com.au"
        Then the customer sees "Use Authorised Signatory Contact as the only contact" is "checked"
        And the customer sees "Sign Up Button" is "disabled"



