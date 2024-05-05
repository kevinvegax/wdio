import { browser } from '@wdio/globals'
import { Details } from '../PO/Google/GoogleDetails.po.ts'


describe('Automatic Google Search', () => {
    let details: Details

    beforeAll(()=> {
        details = new Details();
        
        browser.url('www.google.com')
    })
    
    it('001 - Should make a Search  ', async()=> {
        (await details.txtSearch).setValue('HOLA')
        await browser.pause(10000)
    })

    afterAll(()=> {

    })
})