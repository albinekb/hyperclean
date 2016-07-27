'use strict'

exports.decorateBrowserOptions = defaults => {
  const clean = Object.assign({ frame: false }, defaults)
  delete clean.titleBarStyle
  return clean
}

exports.onApp = () => {}
