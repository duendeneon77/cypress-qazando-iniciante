/// <reference types="cypress"/>

export default{
    clicarCadastrar(){
        cy.get('#btnRegister').click()
    },
    // validarMensagemDeErro(){
    //     cy.get('.errorLabel').then((element)=>{
    //         expect(element).to.be.visible
    //         expect(element.text()).eq('O campo nome deve ser prenchido')


    //     })
    // } ou:

//     validarMensagemDeErro(){
//         cy.get('.errorLabel').should('be.visible').and('have.text', 'O campo nome deve ser prenchido')
//     }
    validarMensagemDeErro(message){
        cy.get('#errorMessageFirstName').should('be.visible').and('have.text', message)
    },

    preencheNome(name){
        cy.get('#user').should('be.visible').type(name)
    },
    preencheEmail(email){
        cy.get('#email').should('be.visible').type(email)
    },
    preenchePassword(password){
        cy.get('#password').should('be.visible').type(password)
    },
    validarMensagemSucesso(user){
        cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!')
        cy.get('#swal2-html-container').should('be.visible').and('have.text',`Bem-vindo ${user}`)
    },

}