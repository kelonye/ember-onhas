require('ember');
var assert = require('timoxley-assert');
var Book = Em.Object.extend(require('ember-onhas'), {
  id: null,
  created: false,
  setCreated: function(){
    this.set('created', true);
  }
});

describe('ember-onhas', function(){
  it('should call fn if target has property', function(done){
    Book.create({
      id: 1,
      init: function(){
        this.onhas('id', this.setCreated);
        assert.equal(this.get('created'), true);
        done();
      }
    });
  });
  it('should call fn as soon as target acquires property', function(done){
    Book.create({
      init: function(){
        this.onhas('id', this.setCreated);
        assert.equal(this.get('created'), false);
        this.set('id', 1);
        assert.equal(this.get('created'), true);
        done();
      }
    });
  });
})