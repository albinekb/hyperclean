'use strict'

exports.decorateBrowserOptions = config => {
  return Object.assign({}, config, {
    titleBarStyle: '',
    frame: false,
  });
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .tabs_borderShim { display: none; }
      .tabs_list { margin-left: -1px; }
      ${config.hyperclean && config.hyperclean.hideTabs && `
        .header_header { display: none; }
        .terms_terms { margin-top: 0px; }
      `}
    `
  })
}
