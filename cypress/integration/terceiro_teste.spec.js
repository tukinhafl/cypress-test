/// <reference types = "cypress" />

context('Validar menus', () => {

  it('clicando no link comprar deve direcionar para a página de compra', () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
    cy.get('@comprarMenuLink').contains('Comprar')
    cy.get('@comprarMenuLink').click()
    cy.get('.page-title').should('contain', 'Produtos')
    cy.url().should('contain', '/shop')
  })

  it('clicando no link de conta deve direcionar para a página de login/cadastro', () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('.icon-user-unfollow').click()
    cy.url().should('contain', '/my-account-2')
  })
})