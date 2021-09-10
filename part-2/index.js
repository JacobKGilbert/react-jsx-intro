const App = () => (
  <div>
    <Tweet username='me' name='John' date='9/12/2019' message='Second!' />
    <Tweet username='you' name='Jacob' date='6/14/2020' message='Third!' />
    <Tweet username='that_guy' name='Jingle' date='3/28/2016' message='First!' />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))