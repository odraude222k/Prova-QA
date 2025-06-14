describe('usuario', () => {
  it('criar um usuario', () => {
    entrar_site();
    cy.get('#signin2').click()
    cy.get('#sign-username').type('odr')
    cy.get('#sign-password').type('123456')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })

  it('entrar com usuario existente', () => {
    entrar_site();
    cy.get('#login2').click()
    cy.get('#loginusername').type('odr')
    cy.get('#loginpassword').type('123456')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })

  it('entrar com usuario nao existente', () => {
    entrar_site();
    cy.get('#login2').click()
    cy.get('#loginusername').type('gatodovizinho')
    cy.get('#loginpassword').type('4321')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
  })
  
})


function entrar_site(){
  cy.visit('https://www.demoblaze.com/index.html')
}