/// <reference types="Cypress" />

import { Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { SignUpPage } from "../../page-objects/signupPage";
import { BILLING_ADDRESS_INFORMATION, HEADER, SUBHEADER } from "../cmsConstants";
 
const signUpPage = new SignUpPage();

Before( () => {
  cy.viewport(Cypress.env('resolution'));
})

Given(`the Rhipe customer is on sign up page`, () => {
    // navigate to page and verify headers
    signUpPage.navigate();
    signUpPage.getElement('Header').should('be.visible').should('contain', HEADER);
    signUpPage.getElement('Sub Header').should('be.visible').should('contain', SUBHEADER);    
})

Then(`the customer verifies {string} is {string} field with {string}`, (fieldName, mandatoryOption, manadtoryChar) => {
  signUpPage.getElement(fieldName)
      .then($els => {
        const win = $els[0].ownerDocument.defaultView;
        const before = win.getComputedStyle($els[0], 'after');
        const contentValue = before.getPropertyValue('content');
        expect(contentValue).to.eq(`"${manadtoryChar}"`);
      })
})

Then(`the customer fills in {string} as {string}`, (fieldName, inputText) => {
    signUpPage.fillField(fieldName, inputText);
})

Then(`the customer selects {string} as {string}`, (fieldName, selectionText) => {
    signUpPage.selectItem(fieldName, selectionText);
})

Then(`the customer sees {string} is {string}`, (fieldName, status) => {
    if (status === 'unchecked') {
      signUpPage.getElement(fieldName).should('not.be.checked');
    } else if (status === 'disabled') {
      signUpPage.getElement(fieldName).should(`be.${status}`);
    } else {
      signUpPage.getElement(fieldName).should('be.checked');
    }
})

When(`the customer checks {string}`, (fieldName) => {
  signUpPage.checkItem(fieldName);
})

Then(`the customer sees {string}`, (fieldName) => {
  if (fieldName === 'Billing Address Information') {
    signUpPage.getElement(fieldName).should('be.visible').should('contain', BILLING_ADDRESS_INFORMATION);
  } 
})
