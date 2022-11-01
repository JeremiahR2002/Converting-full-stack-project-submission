import { Container, grid } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import questions from './questions';
import answer from './questions';
import '../Forum.css';
export function Quiz() {
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
    Navigate("/cat");
  }
  else if (sum => 31) {
    // window.location.href = "http://localhost:3000/dog";
    Navigate("/dog");
  }
  if (sum == 30) {
    Navigate("/sad");
  }
}


    return (
      <>
        <Form className='Form1'>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <Form.Check
              inline
              label="Which do you prefer?"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="City"
              link href = "./Forum.css"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="Country"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
          </div>
        ))}

        
      </Form>
      <answer></answer>
      <Form className='Form2'>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <Form.Check
              inline
              label="Which do you like more?"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Autumn"
              link href = "./Forum.css"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="Spring"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
          </div>
        ))}

        
      </Form>
      
      <Form>
        <Form className='Form3'></Form>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <Form.Check
              inline
              label="What do you do in your free time?"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Hiking"
              link href = "./Forum.css"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="Going out with friends"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Staying inside and having a drink"
              name="group1"
              type={type}
              id={`inline-${type}-4`}
              onClick={dogquestion}
            />
          </div>
        ))}

        
      </Form>

      <Form>
        <Form className='Form4'></Form>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <Form.Check
              inline
              label="How do you describe your personality?"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="Introvert"
              link href = "./Forum.css"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="Extrovert"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
          </div>
        ))}

        
      </Form>

      <Form>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <Form.Check
              inline
              label="Totally!"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="2"
              link href = "./Forum.css"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="3"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="4"
              name="group1"
              type={type}
              id={`inline-${type}-4`}
              onClick={dogquestion}
            />
          </div>
        ))}

        
      </Form>

      <Form>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="grid-container">
            <Form.Check
              inline
              label="Totally!"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="2"
              link href = "./Forum.css"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={dogquestion}
            />
            <Form.Check
              inline
              label="3"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
              onClick={catquestion}
            />
            <Form.Check
              inline
              label="4"
              name="group1"
              type={type}
              id={`inline-${type}-4`}
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