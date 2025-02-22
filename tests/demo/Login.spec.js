import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'
//Verify loging Pass
test('LoginSucess', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('Cathy.hettison@gmail.com','Passis@123')
  await expect(page).toHaveTitle('My Account')
 
});
//Verify loging Fail
test('LoginFail', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('Mino@gmail.com','Mino@123')
  await expect(page.getByText('The account sign-in was incorrect')).toBeVisible()
 
});

test('BlankEmail', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login(' ','Lilani@123')
  await expect(page.getByText('This is a required field')).toBeVisible()
 
});

test('BlankPassword', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.gotoLoginPage() 
  await Login.login('Yohani@outlool.com','')
  await expect(page.getByText('This is a required field')).toBeVisible()
 
});