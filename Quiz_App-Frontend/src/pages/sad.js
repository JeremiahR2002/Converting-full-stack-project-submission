import Monkey from "./Monkey.gif";
import '../Answer.css'
export function Sad() {
  return (
    <>
      <h1 className="SadMonk">
        We cant figure out what you are... That makes us sad!
      </h1>
        <img className="MonkPicture" src= {Monkey} alt="monkey"/>
        <br></br>
        <a href="https://tenor.com/search/sad+gibbon-gifs">Sad Gibbon GIFs</a>
    </>
  );
}
