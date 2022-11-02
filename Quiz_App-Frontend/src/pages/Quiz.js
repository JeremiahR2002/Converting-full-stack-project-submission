import { Container, grid } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import questions from './questions';
import answer from './questions';
import '../Forum.css';
export function Quiz() {

  const params = useParams()
  console.log(params);

  let array = [0,];
  console.log(array);

  const Navigate = useNavigate();

  const catquestion = () => {
    array.push(0);
    console.log(array);
  }

  const dogquestion = () => {
    array.push(10);
    console.log(array);
  }

  const answer = () => {
  let sum = 0;

  for (let num of array) {
    sum = sum + num
  }
  
  console.log(sum);
  
  if (sum <= 29) {
    // window.location.href = "http://localhost:3000/cat";
    Navigate(`/cat?name=${params}`);
  }
  else if (sum => 31) {
    // window.location.href = "http://localhost:3000/dog";
    Navigate(`/dog`);
  }
  if (sum === 30) {
    Navigate("/sad");
  }
}


    return (
      <>
        <Form className='Form1'>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <label>
              Which do you prefer?
            </label>
            <Form.Check
              inline
              label="City"
              link href = "./Forum.css"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Country"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
              onClick={dogquestion}
            />
          </div>
        ))}

        
      </Form>
      <Form className='Form1'>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <label>
              What do you do in your free time?
            </label>
            <Form.Check
              inline
              label="Go hiking"
              name="group2"
              type={type}
              id={`inline-${type}-1`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="Staying inside and having a drink"
              link href = "./Forum.css"
              name="group2"
              type={type}
              id={`inline-${type}-2`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Take a long nap"
              name="group2"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Going out with friends"
              name="group2"
              type={type}
              id={`inline-${type}-3`}
              onClick={dogquestion}
            />
          </div>
        ))}

        
      </Form>
      
      <Form className='Form1'>
        <Form className='Form1'></Form>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <label>
              Do you like socializing?
            </label>
            <Form.Check
              inline
              label="Yes"
              name="group3"
              type={type}
              id={`inline-${type}-1`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="No"
              link href = "./Forum.css"
              name="group3"
              type={type}
              id={`inline-${type}-2`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="All the time"
              name="group3"
              type={type}
              id={`inline-${type}-3`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="What's socializing?"
              name="group3"
              type={type}
              id={`inline-${type}-4`}
              onClick={catquestion}
            />
          </div>
        ))}

        
      </Form>

      <Form className='Form1'>
        <Form className='Form1'></Form>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <label>
              Which season do you like?
            </label>
            <Form.Check
              inline
              label="Autumn"
              name="group4"
              type={type}
              id={`inline-${type}-1`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="Spring"
              link href = "./Forum.css"
              name="group4"
              type={type}
              id={`inline-${type}-2`}
              onClick={catquestion}
            />
          </div>
        ))}

        
      </Form>

      <Form className='Form1'>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <label>
              What is your favorite drink at the bar?
            </label>
            <Form.Check
              inline
              label="Gin/tonic"
              name="group5"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Tequila shots"
              link href = "./Forum.css"
              name="group5"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="Martini"
              name="group5"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Beer"
              name="group5"
              type={type}
              id={`inline-${type}-4`}
              onClick={dogquestion}
            />
          </div>
        ))}

        
      </Form>

      <Form className='Form1'>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <label>
              How would you describe your personality?
            </label>
            <Form.Check
              inline
              label="Introvert"
              name="group6"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Extravert"
              link href = "./Forum.css"
              name="group6"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
          </div>
        ))}

        
      </Form>
      <Button onClick={answer} variant="dark">Lets see what you are!</Button>
      </>
    )
}

export default Quiz