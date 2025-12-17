import {test,expect,Locator} from "@playwright/test";

test("Single Select drop down",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

    // const dropdown:Locator = page.locator("select#country");
    // await page.locator("select#country").selectOption('India');
    await page.locator("select#colors").selectOption(['Red','Green','Blue']);
    // await page.locator("select#country").selectOption({value:'france'});
    // await page.locator("select#country").selectOption({index:3});


// const dropdownC:Locator = await page.locator("select#country>option")
// await expect(dropdownC).toHaveCount(10);


// const dropdownOptions:string[] = (await dropdownC.allTextContents()).map(text=>text.trim());
// console.log(dropdownOptions);

//  expect(dropdownOptions).toContain('Japan')

//  for(const dropd of dropdownOptions)
//  {
//     console.log(dropd);
//  }

await page.waitForTimeout(5000);

})