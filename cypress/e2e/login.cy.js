describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Eduarda',
      instagram: '@dudacfer_',
      password: 'pwd123',
    };
    cy.login(user);
    cy.loggedUser(user.name);
  });

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@papitorocks',
      password: '123456',
    };

    cy.login(user);
    cy.modalHaveText('Credenciais inválidas, tente novamente!');
  });

  it('nao deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@rockspapito',
      password: '123456',
    };

    cy.login(user);
    cy.modalHaveText('Credenciais inválidas, tente novamente!');
  });

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: '123456',
    };
    cy.visitPage();
    cy.loginInputPassword(user);
    cy.btnEntrar();
    cy.modalHaveText('Por favor, informe o seu código do Instagram!');
  });

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '@rockspapito',
    };
    cy.visitPage();
    cy.loginInputName(user);
    cy.btnEntrar();
    cy.modalHaveText('Por favor, informe a sua senha secreta!');
  });

  it('todos os campos devem ser obrigatórios', () => {
    cy.visitPage();
    cy.btnEntrar();
    cy.modalHaveText('Por favor, informe suas credenciais!');
  });
});
