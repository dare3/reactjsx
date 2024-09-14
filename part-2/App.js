function App () {
  return (
    <div>
      <h1>Tweets Feed</h1>
      <Tweet 
        username="johndoe"
        name="John Doe"
        date={new Date().toDateString()}
        message="This is my first tweet!"
      />
      <Tweet 
        username="janedoe"
        name="Jane Doe"
        date={new Date().toDateString()}
        message="Learning React is so much fun!"
      />
      <Tweet 
        username="devguy"
        name="Dev Guy"
        date={new Date().toDateString()}
        message="Excited about the new project launch 🚀!"
      />
    </div>
  );
};

