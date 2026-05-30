const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');
const deps = Object.assign({}, pkg.dependencies || {}, pkg.devDependencies || {});
const missing = [];
for (const name of Object.keys(deps)) {
    try {
        const p = require.resolve(name, { paths: [process.cwd()] });
        console.log(name + ' -> ' + p);
    } catch (e) {
        missing.push(name);
        console.log(name + ' -> MISSING');
    }
}
if (missing.length) {
    console.log('\nMissing packages:', missing.join(', '));
    process.exit(2);
} else {
    console.log('\nAll packages present.');
}
