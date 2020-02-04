export default function (Vue, options, {isClient}) {
  const {site} = options

  Vue.prototype.$createStatickitForm = function () {}

  if (isClient) {
    Vue.prototype.$createStatickitForm = function (fnOptions) {
      const sk = require('@statickit/html').default

      sk('form', 'init', {
        site,
        ...fnOptions
      })
    }
  }
}
