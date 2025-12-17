import {test,expect,Locator} from "@playwright/test";
import { get } from "http";

test("Verify the CSS Selectors",async ({page})=>{


    await page.goto("http://testpages.eviltester.com/pages/basics/basic-web-page/");

    const getTitle:Locator = page.locator("html>head>title");
    console.log("Title is : ",await getTitle.textContent())


})