/// <reference types = "cypress" />

context('Realizar uma compra', () => { 
  
  it('Abrir o site e entrar no menu de compras', () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.url().should('contain', '/shop')
  })

  it('Selecionar o primeiro produto, e escolher tamanho e cor', () => {
    cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.url().should('contain', '/product')
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Green').click()
  })

  it('Adicionar o produto ao carrinho e verificar o mesmo', () => {
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.url().should('contain', '/cart')
    cy.get('.checkout-button').click()
    cy.url().should('contain', '/checkout')
  })

  it('Preencher o formulario para compra', () => {
    cy.get('#billing_first_name').type('Teste')
    cy.get('#billing_last_name').type('testinho')
    cy.get('#billing_address_1').type('Avenida dos Democraticos')
    cy.get('#billing_city').type('Cidade teste')
    cy.get('#billing_postcode').type('88811000', {force: true})
    cy.get('#billing_phone').type('48999999999')
    cy.get('#billing_email').type('teste@mail.com')
    cy.get('#place_order').click()
  })
  
})