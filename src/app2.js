console.log('app.js is running');

let count = 0;

const addOne = () => {
  count++;
  renderApp();
}
const minusOne = () => {
  count--;
  renderApp();
}
const reset = () => {
  count = 0;
  renderApp();
}
var counter = document.getElementById('counter');

const renderApp = () =>{
  const template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template3, counter);
};
renderApp();
