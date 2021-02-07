const rootElement = document.getElementById("root");
console.log(rootElement);

class Slider extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="item1" class="items">
          <div id="item--slide"></div>
        </div>
        <div id="item2" class="items">
          <div id="item--slide"></div>
        </div>
        <div id="item3" class="items">
          <div id="item--slide"></div>
        </div>
        <div id="item4" class="items">
          <div id="item--slide"></div>
        </div>
        <div id="item5" class="items">
          <div id="item--slide"></div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Slider />
    </div>
  );
}

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
