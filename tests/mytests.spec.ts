import {test,expect} from '@playwright/test';


test("verify page URL",async({page})=>{

await page.goto("https://nodejs.org/en");

let url:string =await page.url();
console.log("url:",url);

await expect(page).toHaveURL(/node/);


})