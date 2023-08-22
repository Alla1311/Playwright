const { chromium } = require("playwright");

(async () => {
  //const browser = await chromium.launch({});
  //const page = await browser.newPage();
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("liialia@mail.ru");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("Rjpenj1988");
  await page.getByTestId("login-submit-btn").click();
  //await browser.close();
})();
