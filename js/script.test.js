import {basket,cart,products} from "./script";

describe('testing',()=>{
  it('basket should be 0',()=>{
  	expect(basket).toBe(0);
  });
  it('cart should be 0',()=>{
  	expect(cart).toBe(null);
  });
  it('products should be 12',()=>{
  	expect(products).toBe(12);
  });
});