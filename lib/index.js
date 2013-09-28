require('ember');

module.exports = Em.Mixin.create({
  onhas: function(property, fn){
    if (this.get(property)) return fn.call(this)
    this.addObserver(property, function(sender, key, value, rev){
      var value = this.get(property);
      if (!!value){
        this.removeObserver(property);
        fn.call(this);
      }
    });
  }
});