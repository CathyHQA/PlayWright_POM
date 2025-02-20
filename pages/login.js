exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Email*' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password* Password' })
        this.login_button = page.getByRole('button', { name: 'Sign In' })

    }

    async gotoLoginPage(){
        this.page.goto('https://magento.softwaretestingboard.com/customer/account/login')
    }

    async login(username,password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }

    


}