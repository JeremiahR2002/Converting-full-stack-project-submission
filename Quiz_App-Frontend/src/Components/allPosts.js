function AllPosts(props) {
    return (
        <div>
            {props.comments.map((comment)=> {
                return (
                    <div className={'comment'}>
                        <h4>{comment.title}</h4>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default AllPosts;