export default {
  components: true,
  head: {
    titleTemplate: 'Site name: %s',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: ['my-class',],
    },
    meta: [{
      charset: 'utf-8',
    }]
  },
  router: {
    prefetchLinks: false,
  }
}
