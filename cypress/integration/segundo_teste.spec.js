/// <reference types = "cypress" />

context('Validar menus', () => {

  it('clicando no link comprar deve direcionar para a página de compra', () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
    cy.get('@comprarMenuLink').contains('Comprar')
      .and('have.attr', 'href')
      .and('include', 'shop')
    cy.get('@comprarMenuLink').click()
    // cy.contains('Produtos')
    // cy.url().contains('/shop')
    cy.get('.page-title').should('contain', 'Produtos')
  })
})