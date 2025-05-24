const ChildList = (props) => {
    return (
        <>
            <h1> Child List</h1>
            <div>
                {!props.children.length ? (
                    <h2>No Children Added Yet!</h2>
                ) : (
                    <ul>
                        {props.children.map((child) => (
                            <li key={child._id}
                                style={{ cursor: 'pointer', color: "#646CFF" }}
                                onClick={() => props.handleSelect(child)}
                            >
                                {child.name}
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={props.handleFormView}>
                    {props.isFormOpen ? 'Close Form' : 'Add A Child'}
                </button>
            </div>
        </>
    )
}

export default ChildList;