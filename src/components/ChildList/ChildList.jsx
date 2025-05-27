const ChildList = (props) => {
  console.log("ChildList received children:", props.children); // 👈 Add this

    return (
        <>
            <h2> Child List</h2>
            <div>
            {!Array.isArray(props.children) || props.children.length === 0 ? (
                    <h3>No Children Added Yet!</h3>
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