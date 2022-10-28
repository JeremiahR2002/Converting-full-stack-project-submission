import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


  const Home = () => {
    console.log("We got clicked!");
    const [name, setName]= useState('')
    const [body, setBody] = useState('')
    

    const saveName = async () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: name,
          })
        };
      const posts = await fetch('/quizzes', requestOptions)
      const cleanPosts = await posts.json()
  }

console.log("name", name)
return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Display Name</Form.Label>
        <Form.Control onChange={(e)=> {
          console.log('WE R TYPING on change happening!!')
          setName(e.target.value)
          }} type="displayname" placeholder="Enter your display name!" />
        <Form.Text className="text-muted">
          Enter your Display Name and proceed! !!!!!!!!!!
        </Form.Text>
      </Form.Group>
      <Button id="submitButton" onClick={saveName}  variant="primary">
        Submit
      </Button>
    </Form>

  );
}

  
export default Home