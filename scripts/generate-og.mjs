import sharp from 'sharp'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0b1120"/>
  <rect x="80" y="80" width="8" height="470" fill="#60a5fa"/>
  <text x="128" y="250" font-family="Helvetica, Arial, sans-serif" font-size="88" font-weight="700" fill="#e5e7eb">Umang Devanshu</text>
  <text x="128" y="330" font-family="Helvetica, Arial, sans-serif" font-size="44" fill="#60a5fa">Full-Stack Engineer</text>
  <text x="128" y="420" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#9ca3af">SAP SuccessFactors SaaS and developer tools</text>
  <text x="128" y="466" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#9ca3af">JavaScript, Node.js, PostgreSQL, SAPUI5</text>
  <text x="128" y="540" font-family="Menlo, monospace" font-size="28" fill="#9ca3af">devumang096.github.io/portfolio</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile('public/og.png')
console.log('Wrote public/og.png')
