/// <reference types="cypress"/>

import common_page from '../support/pages/common_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import { faker } from '@faker-js/faker'

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        common_page.acessarCadastroUsuario()
    })

    it('Cadastro com nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemDeErro('O campo nome deve ser prenchido')
    })

    it('Cadastro email vazio', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemDeErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo email invalido', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemDeErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha vazio', () => {
         cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemDeErro('O campo senha deve ter pelo menos 6 dígitos')
    })

        it('Campo senha com caracteres insuficientes', () => {
         cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preenchePassword('12345')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemDeErro('O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Login com sucesso', () => {

        const name = faker.person.fullName()
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preenchePassword(faker.internet.password())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(name)

       
    })
})
