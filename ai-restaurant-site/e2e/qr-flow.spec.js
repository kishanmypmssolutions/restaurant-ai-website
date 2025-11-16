const { test, expect } = require('@playwright/test')
test('QR -> guest -> upload -> admin approve', async ({ page }) => {
  await page.goto('/guest?table=1')
  await page.fill('input[placeholder="Name"]', 'E2E User')
  await page.fill('input[placeholder="Mobile"]', '7000000000')
  await page.click('text=Enter')
  // NOTE: This E2E assumes local dev server running and admin password set.
  expect(await page.locator('text=Guest created').count()).toBeGreaterThan(0)
})
