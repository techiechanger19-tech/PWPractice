import {test,expect,Locator} from "@playwright/test";

test("Verify Xpath axes",async ({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp");

//self node
const selfnode:Locator = page.locator("//td[text()='Germany']/self::td")
await expect(selfnode).toBeVisible();


//parent node
const parentNode:Locator = page.locator("//td[text()='Germany']/parent::tr"); //returns multiple elements
// await expect(parentNode).toBeVisible();
await expect(parentNode).toContainText("Maria Anders");

//child node

const childNode:Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
await expect(childNode).toHaveCount(3);

//ancestor

const ancestorNode: Locator = page.locator("//td[text()='Germany']/ancestor::table");
await expect(ancestorNode).toHaveAttribute('id','customers');

//decendant

const decendantNode: Locator = page.locator("//table[@id='customers']/descendant::td");
await expect(decendantNode).toHaveCount(18);

//following

const followingNodes:Locator = page.locator("//td[normalize-space()='Germany']/following::td[1]")
await expect(followingNodes).toHaveText("Centro comercial Moctezuma");

//following-sibling

const followsibling:Locator = page.locator("//td[normalize-space()='Centro comercial Moctezuma']//following-sibling::td");
await expect(followsibling).toHaveCount(2);


//preceding

const precedingNode:Locator = page.locator("//td[normalize-space()='Germany']//preceding::td[1]");
await expect(precedingNode).toHaveText("Maria Anders");

//preceding-sibling

const precedingSibling:Locator = page.locator("//td[normalize-space()='Germany']//preceding-sibling::td");
await expect(precedingSibling).toHaveCount(2);


})

