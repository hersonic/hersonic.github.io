
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/sobre"
  },
  {
    "renderMode": 2,
    "route": "/experiencia"
  },
  {
    "renderMode": 2,
    "route": "/contato"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 916, hash: 'b1de854c4bd589a86acf539d297443e72d824ad6186c31198556ac3d82949560', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: '0e76533e8022212ff5c7c792e29d71bf70828ffed2cb715a150458c4124af670', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sobre/index.html': {size: 6020, hash: 'e65bce0b424830bea81e407611364c07bac67c3473e25e8de66c9047e1de01cd', text: () => import('./assets-chunks/sobre_index_html.mjs').then(m => m.default)},
    'contato/index.html': {size: 5559, hash: 'ab4f73911f7a15f0e431d50ca365d4ee7f8d6c5a4ad8206bdac1439487db1c27', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)},
    'experiencia/index.html': {size: 6103, hash: '1b9be1e76f8e08afce87d5ae1d8cfaee38296486d57479fd98f110237ee5aaf6', text: () => import('./assets-chunks/experiencia_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5580, hash: '2d0cf5ee358fd00ff284dc044f6c1942f5a1ae3c1e68a5ef0ec4a8b44adcbeee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IENSURGW.css': {size: 171, hash: 'K8URdi5bSVc', text: () => import('./assets-chunks/styles-IENSURGW_css.mjs').then(m => m.default)}
  },
};
