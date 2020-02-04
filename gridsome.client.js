// import {createClient} from '@statickit/core'
//
// export default function (Vue, options, {isClient}) {
//   const client = createClient({site: options.site})
//
//   Vue.prototype.$createStatickitForm = function () {}
//
//   if (!isClient) return
//
//   Vue.prototype.$createStatickitForm = async function (fnOptions) {
//     let {form, element} = fnOptions
//     client.startBrowserSession()
//
//     element.addEventListener('submit', async event => {
//       event.preventDefault()
//       const formData = new FormData(event.target);
//       const {body, response} = await client.submitForm(form, formData);
//       console.log(body)
//       console.log(response)
//     })
//
//     function onSuccess() {}
//     function onError() {}
//
//     this.$once("hook:beforeDestroy", () => {
//       client.teardown()
//     })
//   }
// }

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
