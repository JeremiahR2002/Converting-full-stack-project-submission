function AllPosts(props) {
    return (
        <div>
            {props.comments.map((comment)=> {
                return (
                    <div className={'comment'}>
                        <h1>{comment.title}</h1>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default AllPosts;