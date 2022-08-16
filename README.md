# Redux Toolkit Bulletin Board App:

We look at React Redux Thunk Middleware in Redux Toolkit for Async Actions with Axios.
In this React Redux Thunk Middleware tutorial, you will learn how to create async actions using Axios in Redux Toolkit. You will learn what a thunk is and how we create async thunks outside of a Redux slice.

Important Note:
Redux does everything synchronously and anything asynchronous has to happen outside the store (in the slice). This is where redux middleware comes in. The most common async middleware is Redux Thunk and is the recommended way to create asynchronous actions using Axios in Redux Toolkit.

Thunk is a programming term that means a piece of code that does some delayed work.

## Scripts:

```
npx create-react-app redux-toolkit-bulletin-board --template redux
cd redux-toolkit-bulletin-board
npm install axios
npm install date-fns
```
