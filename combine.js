const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const i18nJs = fs.readFileSync('js/i18n.js', 'utf8');
const dbJs = fs.readFileSync('js/db.js', 'utf8');
const appJs = fs.readFileSync('js/app.js', 'utf8');

const combinedScripts = `
<script>
// --- i18n.js ---
${i18nJs}

// --- db.js ---
${dbJs}

// --- app.js ---
${appJs}
</script>
`;

// Replace everything from <script src="js/i18n.js"> to the end of the body
const newIndexHtml = indexHtml.replace(/<script src="js\/i18n\.js"><\/script>[\s\S]*?<\/body>/, combinedScripts + '</body>');

fs.writeFileSync('index.html', newIndexHtml, 'utf8');
console.log('Successfully combined JS into index.html');
