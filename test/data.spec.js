global.window = global;
require('../src/data');
require('./data.spec.js');


describe('example', () =>{
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });
});
