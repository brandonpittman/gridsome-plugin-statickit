# gridsome-plugin-statickit

## Forms

In your Gridsome config file, declare the plugin and set your site's ID.

```js
// gridsome.configs.js

plugins: [
  {
  use: 'gridsome-plugin-statickit',
    options: {
      site: 'yourSiteID'
    }
  }
]
```

Then in a component with a form you want to use:

```js
mounted() {
  this.$createStatickitForm({
    form: 'name-of-form',
    element: 'form-element',
    // any other option like onSuccess or something; they'll be merged
  })
}
```
