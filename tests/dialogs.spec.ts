import {test,expect,Locator} from "@playwright/test";
import { text } from "stream/consumers";


//simple dialog():
//Register a dialog handler:

test("Simple dialog",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog)=>{
        console.log("Dialog type", dialog.type());
        expect(dialog.type()).toContain('alert');
        console.log("Dialog text:",dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept();
    })
    //click on simple alert button
    await page.click("#alertBtn");

    await page.waitForTimeout(3000);
})


//Confirmation dialog:
test("Confirmation Dialog",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog)=>{
        console.log("Dialog type", dialog.type());
        expect(dialog.type()).toContain('confirm');
        console.log("Dialog text:",dialog.message());
        expect(dialog.message()).toContain("Press a button!");
        dialog.accept();        //accept for alert() is accept
        // dialog.dismiss();    //dismiss for alert() is reject
    })
    //click on simple alert button
    await page.click("#confirmBtn");

    // const text = await page.locator("#demo").innerText();
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");
    // await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");

    await page.waitForTimeout(3000);

})


//Prompt Dialog
test("Prompt dialog", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog)=>{
        console.log("Dialog type", dialog.type());
        expect(dialog.type()).toContain('prompt');
        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.accept('Sekhar');
    })

    await page.click("#promptBtn");

    await expect(page.locator("#demo")).toHaveText("Hello Sekhar! How are you today?");

    await page.waitForTimeout(4000)
})

