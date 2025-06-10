
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://nano871022.github.io/nano871022.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nano871022.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 479, hash: '785fcf905c84fab9f731f5f700e0d7b0731ab571cffeb6ffcab0cca34a1c6d89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '722e0f673f2044f57f515ff22677218755c8fa1eeb1df3c025bd78dd2195061f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20816, hash: '31435d2decca6b0efd113e90519c6fe83ede3cac8a923edc5225f6d9b93bb40e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
