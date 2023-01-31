/// <reference types = "cypress"/>

describe('Use parametrized', () => {

describe('Variant first', () => {
  describe('Recipients', () => {
    const paramTest = ({ testData, expectedResult}) => 
  function (){
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('.menu-icon.ng-tns-c141-9.ng-star-inserted').click();
    cy.get('.menu-title.ng-tns-c141-11').click();

    cy.log('Form without labels - Recipients ');
    cy.get('[placeholder="Recipients"]').type(testData);
    cy.get('[placeholder="Recipients"]').should("contain.value",expectedResult )
  }

  it('Form without Recipients', paramTest ({testData: 'Form without Recipients', expectedResult: 'Form without Recipients'}))
})

describe('Subject', () => {
  const paramTest = ({ testData, expectedResult}) => 
function (){
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[alt="Material Dark Theme"]').click();
  cy.get('.menu-icon.ng-tns-c141-9.ng-star-inserted').click();
  cy.get('.menu-title.ng-tns-c141-11').click();

  cy.log('Form without labels - Subject ');
  cy.get('[placeholder="Subject"]').type(testData);
  cy.get('[placeholder="Subject"]').should("contain.value",expectedResult )

}

it('Form without Subject', paramTest ({testData: 'Form without Subject', expectedResult: 'Form without Subject'}))
})

describe('Message', () => {
  const paramTest = ({ testData, expectedResult}) => 
function (){
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[alt="Material Dark Theme"]').click();
  cy.get('.menu-icon.ng-tns-c141-9.ng-star-inserted').click();
  cy.get('.menu-title.ng-tns-c141-11').click();

  cy.log('Form without labels - Message');
  cy.get('[placeholder="Message"]').type(testData);
  cy.get('[placeholder="Message"]').should("contain.value",expectedResult )

}

it('Form without Message', paramTest ({testData: 'Form without Message', expectedResult: 'Form without Message'})) 
})
})
describe('Variant second', () => {
  describe('Method 2', () => {

const data = [
  {testData: 'Some text', expectedResult: 'Some text'},
  // {testData: 'Form without Subject', expectedResult: 'Form without Subject'},
  // {testData: 'Form without Message', expectedResult: 'Form without Message'},
]

data.forEach(({testData, expectedResult}) => {
it(`Recipients ${testData}`, () =>  {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[alt="Material Dark Theme"]').click();
  cy.get('.menu-icon.ng-tns-c141-9.ng-star-inserted').click();
  cy.get('.menu-title.ng-tns-c141-11').click();

  cy.log('Form without labels - Recipients ');
  cy.get('[placeholder="Recipients"]').type(testData);
  cy.get('[placeholder="Recipients"]').should("contain.value",expectedResult )

  cy.log('Form without labels - Subject ');
  cy.get('[placeholder="Subject"]').type(testData);
  cy.get('[placeholder="Subject"]').should("contain.value", expectedResult )

  cy.log('Form without labels - Message');
  cy.get('[placeholder="Message"]').type(testData);
  cy.get('[placeholder="Message"]').should("contain.value", expectedResult )
})
})
  })
})
})