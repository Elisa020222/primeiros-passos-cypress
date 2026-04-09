describe('Orange HRM Tests ', () => {

  const selectorList = {
  usernameFild: "[name='username']",
  passwordFild: "[name= 'passaword']",
  loginButton: "[type= submit']",
  sectionTitletopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  dashboardGrid:" .orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role= 'alert']"
}  
  const userData = {
userSuccess:{
  username: 'Admin',
  password:'admin123'
},
userFild:{
  username: 'teste',
  password: 'teste'
}

  } 


  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFild).type(userData.userSuccess.username)
    cy.get(selectorsList.passawordFild).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFild).type(userData.userFial.username)
    cy.get(selectorsList.passawordFil).type(userData.userFial.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  
})
})

