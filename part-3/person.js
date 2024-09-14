function Person(props) {
  // Truncate the name if it's longer than 8 characters
  const displayName = props.name.length > 8 ? props.name.slice(0, 6) + '...' : props.name;

  return (
    <div>
      <p>Learn some information about this person:</p>
      <h3>{displayName}</h3>
      <h3>{props.age >= 18 ? 'Please go vote!' : 'You must be 18'}</h3>
      <p>Hobbies:</p>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}




