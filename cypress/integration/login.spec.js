/// <reference types = "cypress" />

const data = require('../fixtures/user.json')

context('Login', () => { 
  
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br')
  })
  
  it('Com usuário cadastrado, redirecionar para a página de Minha Conta', () => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type(data.usuario)
    cy.get('#password').type(data.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')
  })
})

// import LoginPage from '../support/pageObjects/login'
// import MinhaContaPage from '../support/pageObjects/minhaConta'

// context('Login', () => { 

//   beforeEach(() => {
//     cy.visit('http://lojaebac.ebaconline.art.br')
//   })

//   it('Com usuário cadastrado, redirecionar para a página de Minha Conta', () => {
//     cy.get('.icon-user-unfollow').click()
//     LoginPage.login(data.usuario, data.senha)
//     MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')
//   })
// })