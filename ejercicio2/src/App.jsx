function App() {
  const UserProfile = ({ name, age, mail }) => {
    return (
      <>
        <h1>User Profile</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {mail}</p>
      </>
    );
  };
  return <UserProfile name={"Joel"} age={30} mail={"carlos@gmail.com"} />;
}

export default App;
