import {test,expect,Locator} from "@playwright/test";
import { serialize } from "v8";

test("Verify CSS Selectors", async ({page})=>{


await page.goto("https://demowebshop.tricentis.com/");


// tag and id - tag#id - #id
// const searchBox:Locator= page.locator("input#small-searchterms");
// await searchBox.fill("T-shirts");

await expect(page.locator("input#small-searchterms")).toBeVisible();
await page.locator("input#small-searchterms").fill('T-shirts');


// tag and class - tag.class - .class

await expect(page.locator("input.search-box-text.ui-autocomplete-input")).toBeVisible();
await page.locator("input.search-box-text.ui-autocomplete-input").fill('T-shirts');

// tag and attributes

await expect(page.locator("input[value='Search store']")).toBeVisible();
await page.locator("input[value='Search store']").fill('T-shirts');

//tag,class and attribute

await expect(page.locator("input.button-1.search-box-button[value='Search']")).toBeVisible();
// page.locator("input.button-1.search-box-button[value='Search']")


})