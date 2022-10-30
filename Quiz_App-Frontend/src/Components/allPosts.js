//import '../App.css';

function AllPosts(props) {

    const style = {
        post: {
            backgroundColor: 'red'
        }
    }
    return (
        <div>
            {props.comments.map((comment)=> {
                return (
                    <div className={'comment'}>
                        <h4 className="again">{comment.title}</h4>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default AllPosts;