Install
---
  
    $ component install kelonye/ember-onhas


Example
---

```
Person.createWithMixins(require('ember-onhas'), {
  id: null,
  init: function(){
    this.onhas('id', this.speak);
  }
});
```

Test
---

    $ make test