//Задача № 1
javascript
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({ hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let firstCall = true;
    let count = 0;
    let allCount = 0;

    function wrapper(...args) {
        allCount++;

        if (firstCall) {
            func.apply(this, args);
            count++;
            firstCall = false;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                count++;
            }, delay);
        }
    }

    Object.defineProperty(wrapper, 'count', {
        get() { return count; },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(wrapper, 'allCount', {
        get() { return allCount; },
        enumerable: false,
        configurable: false
    });

    return wrapper;
}