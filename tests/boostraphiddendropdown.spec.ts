import {test,expect,Locator} from "@playwright/test";


test("Boostrap hidden drop down",async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator("input[name='username']").fill('Admin');
await page.locator("input[name='password]").fill('Admin123');
await page.locator("button[type='submit']").click();

//click on the PIM
await page.locator('PIM').click();

//click on Job Title Dropdown
await page.locator('form i').nth(2).click();
await page.waitForTimeout(2000);

//capture all the options from dropdown and count

const options:Locator = page.locator("div[role='listbox'] span");

const count:number = await options.count();
console.log("Number of options:",count);

//print all the options:

for(let i=0;i<count;i++)
{
    console.log(await options.nth(i).innerText());
}

//select/click an option

for(let i=0;i<count;i++)
{
    const text = await options.nth(i).innerText();
    if(text === 'Automaton Tester')
    {
        await options.nth(i).click();
        break;
    }
}
})