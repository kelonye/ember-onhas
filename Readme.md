Install
---
  
    $ component install kelonye/ember-onhas


Example
---

See [demo](http://component-kelonye.rhcloud.com/#/5246e00fa0e4a9f96b00000e)

```javascript
var onhas = require('ember-onhas');
var book = Em.Object.createWithMixins(onhas);
book.onhas('title', function(){
  console.log(book.get('title'));
});
book.set('title', 'Gentle introduction to Ember.js');
```

Test
---

    $ make test