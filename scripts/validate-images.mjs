import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')

const paths = new Set()

function collectFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  for (const match of content.matchAll(/['"](\/images\/[^'"]+)['"]/g)) {
    paths.add(match[1])
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') walk(fullPath)
    } else if (/\.(tsx?|jsx?|mjs)$/.test(entry.name)) {
      collectFromFile(fullPath)
    }
  }
}

walk(path.join(root, 'components'))
walk(path.join(root, 'app'))
walk(path.join(root, 'lib'))

const missing = []
const empty = []

for (const imagePath of [...paths].sort()) {
  const file = path.join(publicDir, imagePath)
  if (!fs.existsSync(file)) {
    missing.push(imagePath)
  } else if (fs.statSync(file).size === 0) {
    empty.push(imagePath)
  }
}

console.log(`Checked ${paths.size} image references`)

if (missing.length) {
  console.error('Missing files:')
  missing.forEach((p) => console.error(`  - ${p}`))
}

if (empty.length) {
  console.error('Empty files:')
  empty.forEach((p) => console.error(`  - ${p}`))
}

if (missing.length || empty.length) {
  process.exit(1)
}

console.log('All image references are valid.')
