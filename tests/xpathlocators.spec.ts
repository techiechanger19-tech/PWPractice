import {test,expect,Locator} from "@playwright/test";

test("verify Xpath Locators",async ({page})=>{


await page.goto("https://demowebshop.tricentis.com/");


const absolutelogo:Locator = page.locator("//html/body/div[4]/div/div/div/a/img")
await expect(absolutelogo).toBeVisible();


const relativelogo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
await expect(relativelogo).toBeVisible();

const products:Locator = page.locator("//h2/a[contains(@href,'computer')]")
const pcount:number =await products.count();
console.log("count of products:",pcount);
expect(pcount).toBeGreaterThan(0);

let productTitles:string[] =await products.allTextContents();

for(let pt of productTitles)
{
    console.log(pt);
}


const buildProducts:Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
const bCount:number =await buildProducts.count();
expect(bCount).toBeGreaterThan(0);

const buildingProducts:Locator = page.locator("//a[text()='Register']");
await expect(buildingProducts).toBeVisible();

const lastEle:Locator = page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastEle).toBeVisible();
console.log("Last element:",await lastEle.textContent());

const positionEle:Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(positionEle).toBeVisible();
console.log("Last element:",await positionEle.textContent());
})