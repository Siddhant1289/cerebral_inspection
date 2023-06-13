import "./App.css";
function App() {
  return (
    (<div className="fb-header-base"></div>),
    (
      <div>
        <div className="fb-header">
          <div id="img1" className="fb-header">
            <img src="facebook.png" />
          </div>
          <div id="form1" className="fb-header">
            Email or Phone<br></br>
            <input placeholder="Email or Phone" type="mail" name="name" />
            <br></br>
            <input type="checkbox" />
            keep me logged in
          </div>
          <div id="form2" className="fb-header">
            Password<br></br>
            <input placeholder="Password" type="password" name="password" />
            <br></br>
            Forgotten your password?
          </div>
          <div>
            <input type="submit" className="submit1" value="login" />
          </div>
        </div>
        <div className="fb-body">
          <div id="intro1" className="fb-body">
            Facebook helps you connect and share with the <br></br>
            people in your life.
          </div>
          <div id="intro2" className="fb-body">
            Create an account
          </div>
          <div id="img2" className="fb-body">
            <img src="world.png" />
          </div>
          <div id="intro3" className="fb-body">
            It's free and always will be.
          </div>
          <div id="form3" className="fb-body">
            <input
              placeholder="First Name"
              type="text"
              id="namebox"
              name="name1"
            />
            <input placeholder="Last Name" type="text" id="namebox" /> <br></br>
            <input placeholder="Emai" type="text" id="mailbox" />
            <br></br>
            <input placeholder="Re-enter email" type="text" id="mailbox" />
            <br></br>
            <input placeholder="Password" type="password" id="mailbox" />
            <br></br>
            <input type="date" id="namebox" />
            <br></br>
            <br></br>
            <input type="radio" id="r-b" name="sex" value="male" />
            Male
            <input type="radio" id="r-b" name="sex" value="female" />
            Female<br></br>
            <br></br>
            <p id="intro4">
              By clicking Create an account, you agree to our Terms and that you
              have read our Data Policy, including our Cookie Use.
            </p>
            <input
              type="submit"
              className="button2"
              value="Create an account"
            />
            <br></br>
            <hr></hr>
            <p id="intro5">Create a Page for a celebrity, band or business.</p>
          </div>
        </div>
        <div className="fb-body-footer">
          <div id="fb-body-footer-base" className="fb-body-footer">
            Designed by Krishna Nithariya
          </div>
        </div>
      </div>
    )
  );
}
export default App;
