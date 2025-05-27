const ParentDetail = (props) => {

    if(!props.selected) {
        return (
            <div>
                <h1>No Details</h1>
            </div>
        )
    }

    return (
        <>
            <h2>Parent Details</h2>
            <ul>
                <li>Username: {props.selected.username}</li>
            </ul>
            <button onClick={() => props.handleFormView(props.selected)}>
                Edit Parent
            </button>
            <button onClick={() => props.handleDeleteChild(props.selected._id)}>
                Delete Parent
            </button>
        </>
    )
}

export default ParentDetail