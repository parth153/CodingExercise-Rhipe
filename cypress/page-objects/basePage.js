export class BasePage {

    enterInput(identifier, inputText) {
        cy.get(identifier).type(inputText);
    }

    selectItem(identifier, selectionText) {
        cy.get(identifier).select(selectionText, {force: true});
    }

    checkItem(identifier) {
        cy.get(identifier).check({force: true});
    }
}