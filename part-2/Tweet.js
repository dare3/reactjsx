

function Tweet ({ username, name, date, message }) {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <strong>{name}</strong> <span>@{username}</span>
        <span className="tweet-date">{date}</span>
      </div>
      <p className="tweet-message">{message}</p>
    </div>
  );
};

