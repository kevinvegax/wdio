import { $, browser } from '@wdio/globals'

export class Login {
    get txtEmail() { return $('//input[@aria-label="Correo electrónico o teléfono"]'); }
    get btnSiguiente() { return $('span=Siguiente"]'); }

    async login (email: string, password: string) {
        browser.url('www.gmail.com')
        await browser.pause(50000);
        (await this.txtEmail).click();
        (await this.txtEmail).setValue(email)
        await browser.pause(10000);
        (await this.btnSiguiente).click();
    }
}