/**
 * Update video.js version in examples.
 *
 * @since 3.0.0
 */

const replace = require('replace-in-file');

const OLD_VERSION = "7.7.6";
const NEW_VERSION = "7.8.4";

const options = {
  files: 'docs/demo/**/*.html',
  from: new RegExp(OLD_VERSION, 'g'),
  to: NEW_VERSION,
  dry: false
};

console.log();
console.log(`Updating video.js from ${OLD_VERSION} to ${NEW_VERSION} in ${options.files}`);
console.log();

replace(options)
.then(results => {
    console.log('Replacement results:', results);
})
.catch(error => {
    console.error('Error occurred:', error);
});
