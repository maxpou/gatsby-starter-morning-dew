/* eslint-disable no-console */
const { readFile, existsSync } = require('fs')
const { join, dirname } = require('path')
const glob = require('glob')
const YAML = require('yaml')
const puppeteer = require('puppeteer')

const baseUrl = process.argv[2] || 'http://localhost:8000/'

const takeScreenshot = async (url, width, height, destination) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })
  await page.screenshot({
    path: destination,
    clip: {
      x: 0,
      y: 0,
      width,
      height
    }
  })

  await browser.close()
}

const getArticleFiles = () => {
  return glob.sync(join(__dirname, '..', 'content', 'posts', '**', '*.md'))
}

const parseFile = async file => {
  return new Promise((resolve, reject) => {
    readFile(file, 'utf8', (err, content) => {
      if (err) {
        return reject(err)
      }

      const frontmatter = content.split('---')[1]
      const data = YAML.parse(frontmatter)

      return resolve({
        ...data,
        file,
        directory: dirname(file)
      })
    })
  })
}

const main = async () => {
  const files = await Promise.all(getArticleFiles().map(parseFile))

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const destPrefix = join(file.directory, `${file.slug}-`)
    const fbFile = `${destPrefix}fb.png`
    const twFile = `${destPrefix}tw.png`

    if (file['generate-card'] !== false) {
      await takeScreenshot(`${baseUrl}${file.slug}/image_fb`, 1200, 630, fbFile)
      console.log(`Created ${fbFile}`)
    }

    if (file['generate-card'] !== false) {
      await takeScreenshot(`${baseUrl}${file.slug}/image_tw`, 440, 220, twFile)
      console.log(`Created ${twFile}`)
    }
  }
}

main()
