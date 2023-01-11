import '../Answer.css';
import Kitty from "./Kitty.gif";

export function Cat() {
  return (
    <>
      <h1 className="Answer">You are a Cat!</h1>
      <img className="CatImages" src= {Kitty} alt="kitty"/>
        <br></br>
        <a href="https://giphy.com/gifs/cat-kisses-hugs-MDJ9IbxxvDUQM">Cat kisses</a>

    </>
  );
}
