import { test, expect } from "@playwright/test";
import fs from "fs";

// Load roles from JSON
const roles = JSON.parse(fs.readFileSync("roles.json", "utf-8"));

test.describe("Multi-Browser Role Tests", () => {
    roles.forEach(({ role, username, password }) => {
        test(`${role} login validation`, async ({ page }) => {
            // Example test steps
            await page.goto("https://the-internet.herokuapp.com/login");
            await page.waitForSelector("#username", { timeout: 10000 });
            // Fill login form
            await page.fill("#username", username);
            await page.fill("#password", password);
            await page.click('button[type="submit"]');

            // Expectation depends on role
            if (role === "Admin") {
                await expect(page.locator("#flash")).toContainText("You logged into a secure area!");
            } else if (role === "Customer") {
                await expect(page.locator("#flash")).toContainText("You logged into a secure area!");
            } else {
                await expect(page.locator("#flash")).toContainText("Your username is invalid!");
            }


        });
    });
});

