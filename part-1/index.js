const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name='Jacob'/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))