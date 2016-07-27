'use strict'

exports.decorateBrowserOptions = defaults => {
  const clean = Object.assign({ frame: false }, defaults)
  delete clean.titleBarStyle
  return clean
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .tab_first { margin-left: 0px; }
    `
  })
}
