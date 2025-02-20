import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('Cathy.hettison@gmail.com','Passis@123')

  //await page.goto('https://magento.softwaretestingboard.com/customer/account/login');
  //await page.getByRole('textbox', { name: 'Email*' }).click();
  //await page.getByRole('textbox', { name: 'Email*' }).fill('Cathy.hettison@gmail.com');
  //await page.getByRole('textbox', { name: 'Password* Password' }).click();
  //await page.getByRole('textbox', { name: 'Password* Password' }).fill('Passis@123');
  //await page.getByRole('button', { name: 'Sign In' }).click();
});