import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AllPosts from '../Components/allPosts';
import '../Answer.css';

const Home = () => {
  console.log("We got clicked!");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [comment, setComment] = useState("");
  const [commentTitle, title] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  const navigate = useNavigate();
  function navigateToQuiz() {
    navigate("/Quiz");
  }
  const saveName = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: name,
      }),
    };
    const posts = await fetch("/quizzes", requestOptions);
    //const cleanPosts = await posts.json()
    document.getElementById("displayNameBox").value = "";
    navigateToQuiz();
  };

  console.log("name", name);

  const grabComments = async () => {
    console.log("Grab comments !!!!");
    const posts = await fetch("/quizzes/comment");
    const cleanPosts = await posts.json();
    setCommentsData(cleanPosts);
  };

  const saveComment = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: commentTitle,
        body: comment,
      }),
    };
    const data = await fetch("/quizzes/comment", requestOptions);
    const cleanData = await data.json();
    console.log("We saved!", cleanData);
    grabComments();
    document.getElementById("commentBox").value = "";
    document.getElementById("commentNameBox").value = "";
  };

  // const deleteComment = () =>{
  //   commentsData.deleteOne(title).then(()=> {
  //     commentsData.context.router.push('/')
  //   })
  // }
  useEffect(() => {
    grabComments();
  }, []);

//console.log('comments', comment)
console.log('commentsData', commentsData)
return (
    <Form className='Standard'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Text className="text-muted">
          Enter your Name and lets see!
        </Form.Text>
        <br></br>
        <Form.Control id="displayNameBox" onChange={(e)=> {
          console.log('WE R TYPING on change happening!!')
          setName(e.target.value)
          }} type="displayname" placeholder="Name" />
      </Form.Group>
      <Button className="Button"id="submitButton" onClick={saveName}  variant="primary">
        Submit
      </Button>
      <br></br>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter a comment here!</Form.Label>
        <br></br>
        <Form.Control
          id="commentNameBox"
          onChange={(e) => {
            console.log("WE R TYPING on change happening!!");
            title(e.target.value);
          }}
          type="commentsection"
          placeholder="Display Name"
        />
        <Form.Text className="text-muted"></Form.Text>
        <br></br>
        <br></br>
        <Form.Control className='special' id="commentBox" onChange={(e)=> {
          console.log('WE R TYPING on change happening!!')
          setComment(e.target.value)
          }} type="commentsection" placeholder="Enter your comment!" />
      </Form.Group>
      <Button className="Button2" id="submitButton" onClick={saveComment} variant="primary">
        Submit a comment!
      </Button>
      {/* <Button className="Button2" id="deleteButton" onClick={deleteComment} variant="primary">
        Delete
      </Button> */}
      <Form.Text>
        <h3>Comments</h3>
        <AllPosts comments={commentsData} />
      </Form.Text>
    </Form>

    // pushing test
  );
};

export default Home;
