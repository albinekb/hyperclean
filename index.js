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
      ${config.hyperclean && config.hyperclean.hideTabs && `
        .header_header { display: none; }
        .terms_terms { margin-top: 0px; }
      `}
      ${config.hyperclean && config.hyperclean.hideFirstTabBorder && `
        .tab_first { border: 0 !important; }
        .tab_first { margin-left: -1px; }
      `}
    `
  })
}
