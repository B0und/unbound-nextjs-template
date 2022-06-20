import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Index", () => {
  test("can switch language", async ({ page }) => {
    // Create 1st todo.
    const englishHello = await page.locator("text=Hello world");
    expect(englishHello).toBeDefined();
    await page.click("text=Русский");
    const russianHello = await page.locator("text=Привет мир");
    expect(russianHello).toBeDefined();
  });
});
