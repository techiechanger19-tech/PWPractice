import {test,expect, Locator} from "@playwright/test";

test("Verify Dynamic XPath",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

for(let i=0;i<=5;i++)
{

    let button:Locator = page.locator("//button[text()='START' or text()='STOP']");
    button.click();
    await page.waitForTimeout(2000);


}




})