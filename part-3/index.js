const App = () => (
  <div>
    <Person name='John' age={15} hobbies={['Writing']} />
    <Person name='Jacob' age={18} hobbies={['Coding', 'Reading', 'Napping']} />
    <Person name='JingleHimmerSmite' age={90} hobbies={['Planting', 'Spelling']} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
