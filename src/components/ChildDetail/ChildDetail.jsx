const ChildDetail = (props) => {

    if(!props.selected) {
        return (
            <div>
      <h2>Select a child to view their details</h2>
      <p>Or click "Add A Child" to get started.</p>
    </div>
        )
    }

    return (
        <>
            <h2>Child Details</h2>
            <ul>
                <li>Name: {props.selected.name}</li>
                <li>Birthday: {props.selected.birthdate}</li>
                    <li>Gender: {props.selected.gender}</li>
            </ul>
            <button onClick={() => props.handleFormView(props.selected)}>
                Edit Child
            </button>
            <button onClick={() => props.handleDeleteChild(props.selected._id)}>
                Delete Child
            </button>
        </>
    )
}

export default ChildDetail