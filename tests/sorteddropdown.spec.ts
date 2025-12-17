import {test,expect,Locator} from "@playwright/test";

test("Sorted options in the  drop down",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

 const dropdown:Locator = page.locator("#colors>option");

 const dropdownOptions:string[] = (await dropdown.allTextContents()).map(text => text.trim());
console.log(dropdownOptions);

 const originalList:string[] = [...dropdownOptions];
 const sortedList:string[] = [...dropdownOptions].sort();

 console.log(originalList);
 console.log(sortedList);

await page.waitForTimeout(5000);

})