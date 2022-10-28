import Form from 'react-bootstrap/Form';


    // const response = fetch(url);
    // fetch(url)
    //     .then(response => {
    //         // handle the response
    //     })
    //     .catch(error => {
    //         // handle the error
    //     });



    // return <h1>Quiz goes here!</h1>



// front-end fetch data from back-end 
// 
export function Quiz() {
    return (
        <Form>
        {[ 'radio' ].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Totally!"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="4"
              name="group1"
              type={type}
              id={`inline-${type}-4`}
            />
          </div>
        ))}
      </Form>
    )
}

