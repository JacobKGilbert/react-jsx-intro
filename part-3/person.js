const Person = ({ name, age, hobbies}) => {
  let shtName = name.substring(0, 6)

  return (
    <div>
      <p>Learn some information about this person</p>
      <h1>Name: {name.length >= 8 ? shtName : name}</h1>
      <h2>Age: {age}</h2>
      <h3>{age < 18 ? 'You must be 18.' : 'Please go vote!'}</h3>

      <h5>Hobbies</h5>
      <ul>
        {hobbies.map((hob) => (
          <li>{hob}</li>
        ))}
      </ul>
    </div>
  )
}