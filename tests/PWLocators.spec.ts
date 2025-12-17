import {test,expect,Locator} from '@playwright/test';

test("Verify playwright locators",async ({page})=>{

    // await page.goto("https://auth-us.surveymonkey.com/login?state=hKFo2SBySmZybU9abkp2Q0pka0dodFhMM2xSYnBkaUhScW5BeqFupWxvZ2luo3RpZNkgWFM2b1BRemt4N1J4YldSbmZqM2RfRndYZzhtYkU5YXWjY2lk2SBzQTM0RFVtUUE0RUlySkM3cTlRdVBDZjFUNzc4QmZMdg&client=sA34DUmQA4EIrJC7q9QuPCf1T778BfLv&protocol=oauth2&prompt=login&scope=openid%20profile%20email&redirect_uri=https%3A%2F%2Fwww.surveymonkey.com%2Flogin%2Fcallback&ut_source=mp&ut_source2=online-registration-form-templates-surveymonkey&ut_source3=desktop-header-cta&ui_locales=en&sm.amp_did=e760b25b-719a-4f6d-8ba5-b8f8de653110&sm.amp_sid=1763814370869&sm.show=sign-up&sm.locale=en&sm.country=IN&sm.subdomain=www&sm.social_popup=false&response_type=code&response_mode=query&nonce=ejdHcXI4dk5wQXFuTkFKQ3pSY3d5WmdMRk9TRWZzbGk4ZFZoZ1NwN2VROA%3D%3D&code_challenge=9crpHReGbSMf2YjB75GmEd-V7F1ckJFWjQBDzS8UsV0&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjIuMC4xIn0%3D#/sign-up");
    // await page.goto("https://admin.typeform.com/signup-email?_gl=1*1mok0ae*_up*MQ..*_ga*MTkwOTY2MjkuMTc2MzgxNDY3OQ..*_ga_N6F0VDRT9W*czE3NjM4MTQ2NzkkbzEkZzAkdDE3NjM4MTQ2NzkkajYwJGwwJGgw&tid=5877f64d-f606-4186-b996-a6af1af9719a");

    // await page.getByPlaceholder("Email").fill('John');
    
    // const logo:Locator = page.getByAltText("Playwright logo");

    // const text:Locator = page.getByText("todos");
    // await expect(text).toBeVisible();
    
    // await page.getByLabel("Email address").fill('john@gmail.com');

    // await page.goto("https://admin.typeform.com/signup?_gl=1*1mok0ae*_up*MQ..*_ga*MTkwOTY2MjkuMTc2MzgxNDY3OQ..*_ga_N6F0VDRT9W*czE3NjM4MTQ2NzkkbzEkZzAkdDE3NjM4MTQ2NzkkajYwJGwwJGgw&tid=5877f64d-f606-4186-b996-a6af1af9719a");
    // await expect(page.getByTitle("Sign Up")).toHaveText('Sign up with email');

    

})