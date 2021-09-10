const Tweet = ({ username, name, date, message}) => {
  return (
    <div>
      <h4>@{ username }</h4>
      <sub>-{ name }</sub>
      <p>{ message }</p>
      <sub>{ date }</sub>
    </div>
  )
}