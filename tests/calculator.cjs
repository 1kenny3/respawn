const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements=new Map();function element(id){if(!elements.has(id))elements.set(id,{textContent:'',innerHTML:'',value:'',disabled:false,handlers:{},addEventListener(t,f){this.handlers[t]=f},querySelectorAll(){return[]},setAttribute(){},classList:{add(){},remove(){},toggle(){}},showModal(){this.open=true},close(){this.open=false}});return elements.get(id)}
element('#calc-qty').value='1';let saved;
const context={document:{querySelector:element,querySelectorAll(){return[]}},localStorage:{getItem(){return '[301,201,{"id":307,"qty":2}]'},setItem(k,v){saved=v}},Intl,setTimeout(){return 1},clearTimeout(){}};
vm.createContext(context);vm.runInContext(fs.readFileSync('public/app.js','utf8'),context);const run=s=>vm.runInContext(s,context);
assert.equal(run('cart.length'),2);assert.equal(run('cartQuantity(301)'),1);assert.equal(run('cartQuantity(307)'),2);
for(const p of run('products')){for(const qty of [1,3,99]){const r=run(`calculatePack(${p.id},${qty})`);assert.equal(r.total,p.price*qty);assert.equal(r.amount,Number(p.amount.replace(/\s/g,''))*qty);}}
for(const qty of [0,-1,1.5,100,NaN,Infinity]){context.testQty=qty;assert.equal(run('calculatePack(301,testQty)'),null)}assert.equal(run('calculatePack(999,1)'),null);
element('#calc-game').value='brawl';element('#calc-game').handlers.change();element('#calc-pack').value='309';element('#calc-qty').value='3';element('#calc-qty').handlers.input();assert.equal(element('#calc-amount').textContent,'510');assert.equal(element('#calc-total').textContent.replace(/\s/g,''),'2697₽');
element('#calc-form').handlers.submit({preventDefault(){}});assert.equal(run('cartQuantity(309)'),3);assert(element('#cart').open);assert(saved.includes('"qty":3'));
element('#calc-form').handlers.submit({preventDefault(){}});assert.equal(run('cartQuantity(309)'),6);assert.equal(element('#total').textContent.replace(/\s/g,''),'6582₽');
element('#calc-qty').value='';element('#calc-qty').handlers.input();assert(element('#calc-add').disabled);assert.equal(element('#calc-total').textContent,'—');element('#calc-form').handlers.submit({preventDefault(){}});assert.equal(run('cartQuantity(309)'),6);
element('#calc-qty').value='99';element('#calc-qty').handlers.input();assert(element('#calc-plus').disabled);
run('cart=[{id:301,qty:999}]');assert.equal(run('addToCart(301,1)'),false);assert.equal(run('cartQuantity(301)'),999);
console.log('PASS: 40 nominals × 3 quantities; invalid inputs; game switching; exact cart totals; repeat additions; persisted quantities; legacy cart migration; limits.');
