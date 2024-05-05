import { Login } from '../PO/Gmail/Gmail.Login.po.ts'
import { browser } from '@wdio/globals'

describe('Send an Automatic Email', () => {
    let loginGmail: Login
    const TestData = {
        email: 'ing.kevinvega23@gmail.com',
        password: '0448112165708'
    }

    beforeAll(()=> {
        loginGmail = new Login();
        
        loginGmail.login(TestData.email, TestData.password);
    })
    
    it('001 - ', async()=> {
        
    })

    afterAll(()=> {

    })
})