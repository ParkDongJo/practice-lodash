
const observer = {
  next(value) {
    console.log("next -> " + value + "");
  },
  error(err) {
    console.log(err);
  },
  return() {
    console.log("관측 종료");
  }
}

function observable(obserber) {
  for(let i = 0; i < 10; i++) {
    obserber.next(i);
  }
  obserber.error('에러 발생--');
  obserber.return();
}

// ---------------------------------------------
function * observerGenerator() { 
  try { 
    while(true) { 
      let value = yield 
      console.log('next -> ' + value + ''); 
    }    
  } catch (err) { 
    console.log('에러 발생') ;
  } 
  console.log ('관측 종료');
}

function createObserver(iterator) { 
  return {
    next(value) { 
      iterator.next(value)  
    }, 
    error(err) { iterator.throw(err) }, 
    return() { iterator.return() } 
  } 
}


const observer2 = observerGenerator();

observer2.next(1);
observer2.next(2);
observable(observer);
