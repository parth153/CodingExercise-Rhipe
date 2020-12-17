/// <reference types="cypress" />

// Plugins File - Add all the require plugin configurations for Cypress here

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
