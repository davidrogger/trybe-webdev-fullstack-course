const uppercase = require('../9.1-exercise7');

test('Testando falso positivo de setTimeout', (done) => {
  uppercase('batatas', (str) => {
    try{
      expect(str).toBe('BATATA');
      done();
    } catch (error) {
      done(error);
    }    
  })
});