const puppeteer = require('puppeteer')

;(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto('https://example.com')

	const key = await page.$eval('h1', (element) => element.innerHTML)
	console.log(key)

	await browser.close()
	return key
})()
