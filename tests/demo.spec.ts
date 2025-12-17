import {test,expect,Locator} from "@playwright/test";
import { text } from "stream/consumers";


test("Verify the test inputs",async ({page})=>{

// Text Inputs Actions

await page.goto("https://testautomationpractice.blogspot.com/");

const textBox:Locator = page.locator("#name");

await expect(textBox).toBeVisible();
await expect(textBox).toBeEnabled();

const maxlength: any =await textBox.getAttribute("maxlength");
expect(maxlength).toBe('15');

await textBox.fill("sekhar G");
// console.log("Text content in the First Name: ",await textBox.textContent());

const enteredValue:string =await textBox.inputValue();
console.log("Text content in the First Name: ",await textBox.inputValue());
expect(enteredValue).toBe("sekhar G");

await page.waitForTimeout(3000);
})

//Radio button Actions

test.only("Verify the Radio Button Actions",async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadio:Locator = page.locator("#male");

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    




})