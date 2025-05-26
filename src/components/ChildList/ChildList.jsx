const ChildList = (props) => {
    console.log("children:", props.children);
    console.log("Type:", typeof props.children);
    console.log("Array?", Array.isArray(props.children));
    console.log("Length:", props.children?.length);
    return (
        <>
            <h1> Child List</h1>
            <div>
                {!props.children.length || props.children.length === 0 ? (
                    <h2>No Children Yet!</h2>
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