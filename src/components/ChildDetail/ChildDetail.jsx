const ChildDetail = (props) => {

    if(!props.selected) {
        return (
            <div>
                <h1>No Details</h1>
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
            <button onClick={() => props.handleDeletePet(props.selected._id)}>
                Delete Child
            </button>
        </>
    )
}

export default ChildDetail