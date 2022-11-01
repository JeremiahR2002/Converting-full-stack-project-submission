//import '../Answer.css';
import Doggy from "./Doggy.gif";
import '../Answer.css';

export function Dog() {
  return (
    <>
      <h1 className="Answer">You are a Dog!</h1>
              <img className="Images" src= {Doggy} alt="doggy"/>
        <br></br>
        <a href="https://giphy.com/gifs/pool-party-dog-swimmin-really-chill-cjbxJXhNXDMjhlr1S8">Party dog swimming</a>

    </>
  );
}
