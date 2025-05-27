import ActivityForm from '../ActivityForm/ActivityForm';
import ActivityList from '../ActivityList/ActivityList';
import { useState } from 'react';


const ChildDetail = (props) => {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [updateActivities, setUpdateActivities] = useState(false);
    const initiateUpdate = () => setUpdateActivities((prev) => !prev);

    if (!props.selected) {
        return (
            <div>
                <h2>Select a child to view their details</h2>
                <p>Or click "Add A Child" to get started.</p>
            </div>
        )
    }


const handleUpdateActivity = async (formData, id) => {
  try {
    const updated = await activityService.update(formData, id);
    if (updated.err) throw new Error(updated.err);

    initiateUpdate();
    setSelectedActivity(null);
  } catch (err) {
    console.error("Error updating activity:", err);
  }
};


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
            <hr />
            <h3>Log a New Activity</h3>
            <ActivityForm childId={props.selected._id} onAdd={initiateUpdate}   selectedActivity={selectedActivity}
  handleUpdate={handleUpdateActivity}
            />
            <h3>Activity History</h3>
            <ActivityList childId={props.selected._id} intiateUpdate={updateActivities}  setSelectedActivity={setSelectedActivity}/> 
        </>
    )
}

export default ChildDetail