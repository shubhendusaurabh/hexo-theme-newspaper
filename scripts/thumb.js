const fs = require('fs');
const {
  spawn
} = require('child_process');

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
  if (path.indexOf('publit.io') > -1 || path.indexOf(hexo.config.theme_config.cdn.domain) > -1) {
    let tempname = path.split('/file/')
    return tempname[0] + `/file/${hexo.config.theme_config.cdn.quality}/` + tempname[1]
  } 
  const filename = `${temp[0]}-${sizes.small}.${temp[1]}`
  // console.log(filename, path)
  // yes then return path
  fs.access(`${hexo.source_dir}${filename}`, (err) => {
    if (err) {
      return filename;
    }
    // no then generate new thumb with sharp
    // console.log(`${hexo.source_dir}${filename}`)
    const resize = spawn('convert', ['-resize', '480x240', `${hexo.source_dir}${path}`, `${hexo.source_dir}${filename}`])
    
    resize.stdout.on('data', data => {
      console.log(`stdout: ${data}`);
    });

    resize.stderr.on('data', data => {
      console.log(`stderr: ${data}`);
    });

    resize.on('close', code => {
      console.log(`child process exited with code ${code}`);
    });
  })

  return filename;

})