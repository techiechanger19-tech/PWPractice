import {test,expect,Locator} from "@playwright/test";

test("Verify the Text Input Actions",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const textBox:Locator = page.locator("#name");
await expect(textBox).toBeVisible();
await expect(textBox).toBeEnabled();


await textBox.fill("Infosys");
// console.log("input value :",await textBox.textContent());
const enteredValue:string =await textBox.inputValue()
console.log("input value :",await textBox.inputValue());
expect(enteredValue).toBe("Infosys");


const max:any =await textBox.getAttribute("maxlength");
expect(max).toBe('15');
// await page.locator(".start").hover();





await page.waitForTimeout(3000);

})


//Radio Button Actions

test("Verify the Radio button Actions",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


const maleRadio:Locator = page.locator("#male");
const femaleRadio:Locator = page.locator("#female");

await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
 expect(await maleRadio.isChecked()).toBe(false);
 await maleRadio.check();
 await expect(maleRadio).toBeChecked();
await page.waitForTimeout(3000);

})

//checkbox actions

test.only("Verify the check box Actions",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//select one check box
/*
const checkBox:Locator = page.getByLabel("Sunday");
await checkBox.check();
await expect(checkBox).toBeChecked();



await page.waitForTimeout(2000);

*/

//select all check box and assert each is checked

const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const checkmaps:Locator[]= days.map(index =>page.getByLabel(index));

for(const checks of checkmaps)
{
    await checks.check();
    await expect(checks).toBeChecked();
}



//uncheck 3 last checkboxes

for(const checks of checkmaps.slice((2),(5)))
{
    await checks.uncheck();
    await expect(checks).not.toBeChecked();
}


await page.waitForTimeout(5000);

//toggel checkboxes







//select random checkboxes


// const random:number[] = [1,3,7];

// for(const i of random)
// {
//     await checkmaps[i].check();
//     await expect(checkmaps[i]).toBeChecked();
// }


// await page.waitForTimeout(5000);

})
