const sharp = require('sharp');
const fs = require('fs');

const config = hexo.config;

const sizes = {
  large: 'l',
  medium: 'm',
  small: 's'
}

hexo.extend.helper.register('thumb', function (path) {
  if (!path) return '';
  path = path.trim();
  const temp = path.split('.')
  // check if thumb size image present
  const filename = `${temp[0]}-${sizes.small}.${temp[1]}`
  // console.log(filename, path)
  // yes then return path
  fs.access(`${hexo.source_dir}${filename}`, (err) => {
    if (!err) {
      return filename;
    }
    // no then generate new thumb with sharp
    // console.log(`${hexo.source_dir}${filename}`)
    sharp(`${hexo.source_dir}${path}`)
      .resize(480, 240)
      .toFile(`${hexo.source_dir}${filename}`, (err, info) => {
        if (err) {
          console.error('Error resizing:', err);
          return false;
        }
        // console.info('thumb generated for path');
        return filename;
      })
  })

  return filename;

})
