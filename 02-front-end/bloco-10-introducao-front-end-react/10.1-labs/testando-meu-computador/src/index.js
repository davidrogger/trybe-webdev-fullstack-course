import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const userName = 'David';
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
      <p>Teste {userName} usando</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);