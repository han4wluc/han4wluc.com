---
tags: [post]
layout: bloglayout.html
title: Immer - A library for creating immutable state
description: Immer is a library for creating immutable state. In this post, I explore why Immer is so impactful and offer suggestions on how to use it in your workspace and life.
date: 2025-05-18
---

Recently, I got very excited about Functional Programming, and I've been intentionally designing and structuring my codebase to use pure functions.

One most common patter is the Model, Actions, Selectors pattern which is essentially what Redux or MobX are also doing.

Recently, I needed to create state stores for frontend project.
The proejct would have 1 global store and many local stores. Reactivity is not needed, it won't be handled by the store it self. Basically it is just a state machine.


```js
class CounterStore {
  state = {
    count: 0,
  };

  increment = () => {
    this.state.count++;
  }


  selectIsEven = () => {
    return this.state.count % 2 === 0;
  }
}

const store = new CounterStore();
store.increment();
store.selectIsEven();
```

This is the Object Oriented way of doing it.
It actually works very well and is very easy and intuitive to use.
However, those are not pure functions, and as the class grows larger, I get worried that the methods will start doing more things and becomes harder to reason about.

Doing it with pure functions would be:

```js

const state = {
  count: 0
}

const increment = (state) => {
  return {
    ...state,
    count: state.count + 1,
  }
}

const selectIsEven = (state) => {
  return state.count % 2 === 0;
}
```

This is functional way of doing it, but it is not as compact or modular as a class.
We can resolve this by wrapping it around a function. And it is global scope which we don't want.

```js
const createCounterStore = () => {
  let state = {
    count: 0,
  }

  return {
    increment: (state) => {
      return {
        ...state,
        count: state.count + 1,
      }
    },
    selectIsEven: (state) => {
      return state.count % 2 === 0;
    },
  }
}


const store = createCounterStore();
let state;
state = store.increment(state);
state = store.selectIsEven(state);


```

`incremnt`, `decrement`, `selectIsEven` are pure functions now.
We have managed to group together the pure functions, but it is annoying to have to pass `state` around each time.
We can fix this using a closure

```js
const createCounterStore = () => {
  const state = {
    count: 0,
  }

  const increment = (state) => {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  
  const selectIsEven = (state) => {
    return state.count % 2 === 0;
  }

  return {
    increment: () => increment(state),
    selectIsEven: () => selectIsEven(state),
  }
}

const store = createCounterStore();
store.increment();
store.selectIsEven();

```

so far so good.
but in real life we have much more complicated state, and it becomes hard to write the change in state because we cannot direclty mutate it, we need to return a new object.

```js
const state = {
  todoItems: [
    {
      id: 1,
      title: 'Buy groceries',
      completed: false,
    },
  ],
}

const markCompleted = (state, id) => {
  return {
    ...state,
    todoItems: state.todoItems.map((item) => item.id === id ? { ...item, completed: true } : item),
  }
}

```

One solution would have been to use a deep clone. Let's implement a naive deep clone with JSON.stringify

```js
const markCompleted = (state, id) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.todoItems.forEach((item) => {
    if (item.id === id) {
      item.completed = true;
    }
  });
  return newState;
}
```

This becomes much more natural to write, we just want to mutate the object.
However deep clone, even with optimized implmentations have computational cost, not a lot but can accumulate if it has to be run very frequently.

The solution for this is Immer. A neat library that is used by many popular libraries like Redux, MobX, etc.

```js
import produce from 'immer';
const markCompleted = (state, id) => {
  return produce(state, (draft) => {
    draft.todoItems.forEach((item) => {
      if (item.id === id) {
        item.completed = true;
      }
    });
  });
}
```

The way immer works under the hood by what I understand is that it uses a proxy to intercept changes and reuses unchanged parts.

Final version.

I will let users write functions. taking 2 parameters state and payload. those functions per se will not be pure as they will directly mutate state.

I will then wrap all those functions with a close and immer produce to pure.

I add some opinionated styling on how i want it to be

My final version

```js
import { produce } from "immer";

/**
 * Turns function from (state, payload) => state to (payload) => state
 * Does not expose state, only actions and selectors
 * @param {*} storeObj 
 * @returns 
 */
const transform = (storeObj) => {
  const closure = (state) => {
    return (fun) => (payload) => {
      return produce(state, draft => {
        return fun(draft, payload);
      });
    };
  };
  return () => {
    const { state, ...actions } = storeObj;
    return {
      ...Object.fromEntries(
        Object.entries(actions).map(([key, value]) => [key, closure(state)(value)])
      ),
    };
  }
};

const selectIsEven = (state) => {
  return state.count % 2 === 0;
};

const increment = (state, payload) => {
  const { unit = 1 } = payload;
  state.count += unit;
  return state;
};

const decrement = (state, payload) => {
  const { unit = 1 } = payload;
  state.count -= unit;
  return state;
};

const createCounterStore = () => {
  const state = {};
  return {
    state,
    selectIsEven,
    increment,
    decrement,
  };
};

export default transform(createStore);
```

from importer file

```js
import createCounterStore from './counterStore';

const store = createCounterStore();
store.increment({ unit: 1 });
store.selectIsEven();

```

So this is just a store, or a state machine. All edits go through actions, and all reads go through selectors as we have not exposed the actual state.

The scope of actions and selectors are very constrained, so it is much more limited than the class version, with the hope that systematically disable mistakes.

We have used a create function closure to `createStore` that returns the actions and selectors so everything is grouped together, just as convenient as a class.

We have used another closure so that we don't have to pass state parameter each time.

Finally we have used immer's product function to make it easier to write mutations to the state while maintaining purity of the entire system.
