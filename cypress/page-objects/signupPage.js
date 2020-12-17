import { PAGE_LOAD_TIMEOUT } from "../support/testConstants";
import { BasePage } from "./basePage";

export class SignUpPage extends BasePage{
    //elements of the page
    elements = {
        header: '#main header > h1',
        subHeader: '#onboarding-form > div.section-header-top > h3',
        businessName: '#CustomerName',
        businessNameLabel: '#onboarding-form > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(1) > label',
        entityId: '#RegistrationNumber',
        addressLineOne: '#Street1',
        addressLineTwoLabel: '#onboarding-form > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(1) > label',
        addressLineTwo: '#Street2',
        addressLineThree: '#Street3',
        city: '#City',
        state: '#State',
        country: '#Country',
        postcode: '#Postcode',
        mainPhone: '#MainPhone',
        fax: '#Fax',
        website: '#WebUrl',
        email: '#Email',
        hearAboutRhipe: '#Source',
        industryType: '#IndustryType',
        differentBillingAddress: '#useanotheraddress',
        billingAddressHeader: '#billingaddressblock h3',
        billingAddressLineOne: '#BillingAddressLine1',
        billingAddressLineTwo: '#BillingAddressLine2',
        billingAddressLineThree: '#BillingAddressLine3',
        billingCity: '#BillingCity',
        billingState: '#BillingState',
        billingCountry: '#BillingCountry',
        billingPostcode: '#BillingPostcode',
        authorizedSignatoryHeader: '#onboarding-form > div.section-header > h3',
        authorizedSignatoryFirstName: '#PrimaryContactFirstName',
        authorizedSignatoryLastName: '#PrimaryContactLastName',
        authorizedSignatoryDirectPhone: '#PrimaryContactPhone',
        authorizedSignatoryJobTitle: '#PrimaryContactJobTitle',
        authorizedSignatoryEmail: '#PrimaryContactEmail',
        useAuthorizedSignatoryContactOnlyContact: '#usesamecontact',
        signUpButton: '#submitbutton'
    }

    //navigate to the page
    navigate() {
        cy.visit(Cypress.env('signUpURL'), {timeout: PAGE_LOAD_TIMEOUT});
    }

    //fill input field
    fillField(identifierText, inputText) {
        let identifier = '';
        switch(identifierText){
            case "Business Name":
                identifier = this.elements.businessName;    
                break;
            case "Entity ID":
                identifier = this.elements.entityId;    
                break;
            case "Address Line 1":
                identifier = this.elements.addressLineOne; 
                break;
            case "Address Line 2":
                identifier = this.elements.addressLineTwo; 
                break;
            case "Address Line 3":
                identifier = this.elements.addressLineThree; 
                break;
            case "City":
                identifier = this.elements.city; 
                break;
            case "State":
                identifier = this.elements.state; 
                break;
            case "PostCode":
                identifier = this.elements.postcode; 
                break;
            case "Main Phone":
                identifier = this.elements.mainPhone; 
                break;
            case "Fax":
                identifier = this.elements.fax; 
                break;  
            case "Website":
                identifier = this.elements.website; 
                break; 
            case "Email":
                identifier = this.elements.email; 
                break;
            case "Billing Address Line 1":
                identifier = this.elements.billingAddressLineOne; 
                break;
            case "Billing Address Line 2":
                identifier = this.elements.billingAddressLineTwo; 
                break;
            case "Billing Address Line 3":
                identifier = this.elements.billingAddressLineThree; 
                break;
            case "Billing City":
                identifier = this.elements.billingCity; 
                break;
            case "Billing State":
                identifier = this.elements.billingState; 
                break;
            case "Billing PostCode":
                identifier = this.elements.billingPostcode; 
                break; 
            case "Authorised Signatory First Name":
                identifier = this.elements.authorizedSignatoryFirstName; 
                break; 
            case "Authorised Signatory Last Name":
                identifier = this.elements.authorizedSignatoryLastName; 
                break;  
            case "Authorised Signatory Direct Phone":
                identifier = this.elements.authorizedSignatoryDirectPhone; 
                break; 
            case "Authorised Signatory Job Title":
                identifier = this.elements.authorizedSignatoryJobTitle; 
                break; 
            case "Authorised Signatory Email":
                identifier = this.elements.authorizedSignatoryEmail; 
                break;                                      
            default:
                throw new Error("Field does not exist on Form" + identifier);
        }
        super.enterInput(identifier, inputText);
    }

    selectItem(identifierText, selectionText) {
        let identifier = '';
        switch(identifierText){
            case "Country":
                identifier = this.elements.country; 
                break;
            case "Hear about Rhipe":
                identifier = this.elements.hearAboutRhipe; 
                break;
            case "Industry Type":
                identifier = this.elements.industryType; 
                break;
            case "Billing Country":
                identifier = this.elements.billingCountry; 
                break;    
            default:
                throw new Error("Field does not exist on Form" + identifier);
        }
        super.selectItem(identifier,selectionText);
    }

    checkItem(identifierText) {
        let identifier = '';
        switch(identifierText){
            case "Use a different address for billing?":
                identifier = this.elements.differentBillingAddress; 
                break;
            default:
                throw new Error("Field does not exist on Form" + identifier);
        }
        super.checkItem(identifier);
    }

    getElement(identifierText) {
        if (identifierText === 'Use a different address for billing?') {
            return cy.get(this.elements.differentBillingAddress);
        } else if (identifierText === 'Header') {
            return cy.get(this.elements.header);
        } else if (identifierText === 'Sub Header') {
            return cy.get(this.elements.subHeader);
        } else if (identifierText === 'Billing Address Information') {
            return cy.get(this.elements.billingAddressHeader);
        } else if (identifierText === 'Use Authorised Signatory Contact as the only contact') {
            return cy.get(this.elements.useAuthorizedSignatoryContactOnlyContact);
        } else if (identifierText === 'Sign Up Button') {
            return cy.get(this.elements.signUpButton);
        } else if (identifierText === 'Business Name Label') {
            return cy.get(this.elements.businessNameLabel);
        } else if (identifierText === 'Address Line 2 Label') {
            return cy.get(this.elements.addressLineTwoLabel);
        } 
    }
}