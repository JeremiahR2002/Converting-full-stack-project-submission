function AllNames(props) {
    return (
        <div>
            {props.names.map((name)=> {
                return (
                    <div className={'name'}>
                        <h1>{name.content}</h1>
                    </div>
                )
            })}
        </div>
    );
}

export default AllNames;