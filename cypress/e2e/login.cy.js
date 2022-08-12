describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Eduarda',
      instagram: '@dudacfer_',
      password: 'pwd123'
    }
    cy.wait(7000)

    cy.login(user)
    cy.loggedUser(user.name)
  })

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@papitorocks',
      password: '123456'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar instagram inexistente', () => {
    const user = {
      instagram: '@rockspapito',
      password: '123456'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })
})
