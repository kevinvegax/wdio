import { $ } from '@wdio/globals'

export class Details {
    get txtSearch() { return $('textarea[aria-label="Search"]') }
}