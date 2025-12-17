import {test,expect,Locator} from "@playwright/test";

test("Auto suggest Drop Down",async ({page})=>{

await page.goto("https://www.flipkart.com/");
await page.locator("input[name='q']").fill("smart");

await page.waitForTimeout(5000);

//Get all the suggested Options -> Ctrl+Shift+P on DOM ->Emulate focused page

const options:Locator = page.locator("ul>li");
const count = await options.count();
console.log("Number of options:", count);
console.log("3th Option :", await options.nth(3).innerText()); //Printing the 3rd position value

//print all the auto suggested values:
for(let i=0;i<count;i++)
{
    console.log(await options.nth(i).innerText());
}

//click on the one option:

for(let i=0;i<count;i++)
{
    const opt = await options.nth(i).innerText();
    if(opt === 'smart phones')
    {
        options.nth(i).click();
        break;
    }
}


await page.waitForTimeout(4000);

})