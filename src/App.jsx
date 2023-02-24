import "./App.css";

function App() {
  return (
    <div className="formCotainer">
      <form>
        <h1>Log in</h1>
        <hr />
        <div className="uiForm">
          <div className="formFeild">
            <label>User Name</label>
            <input type="text" placeholder="user name" name="username" />
          </div>
          <div className="formFeild">
            <label>E-mail adress</label>
            <input type="text" placeholder="e-mail adress" name="mailAdress" />
          </div>
          <div className="formFeild">
            <label>Password</label>
            <input type="text" placeholder="password" name="password" />
          </div>
          <button className="submitButton">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default App;
