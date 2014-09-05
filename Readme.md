Install
---
  
    $ component install kelonye/ember-onhas

Example
---

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