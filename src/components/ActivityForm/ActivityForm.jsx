import { useState } from 'react'

const initialState = {
      childId: {type: mongoose.Schema.Types.ObjectId, ref: 'Child'},
      activityType: {type: String}, // I want this to be a dropdown, meal, play, nap, timeout, potty, etc.)
      note: '',
      date: {type: Date, default: Date.now},
}

const ActivityForm = (props) => {
    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState
    )

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(props.selected) {
            props.handleUpdateActivity(formData, props.selected._id)
        } else {
            props.handleAddActivity(formData)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="childId"> Child </label>
                <input
                    id="childId"
                    name="childId"
                    value={formData.childId}
                    onChange={handleChange}
                    required
                />
                {/* <label htmlFor="name"> Name </label>  /* if the childId is not the name, this should stay, but the back end would need to be updated as well * / 
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} */}
                {/* /> */}
                <label htmlFor="activityType"> Activity Type </label>
                <input
                    id="activityType"
                    name="activityType"
                    value={formData.activityType}
                    onChange={handleChange}
                    required
                />
                {/* on the below, where should we autocalculate the age? */}
                <label htmlFor="note"> Note </label> 
                <input
                    id="note"   
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                />
                <label htmlFor="date"> Date </label>
                <input
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
                <button type="submit">{props.selected ? "Update Activity" :" Add New Activity" }</button>
            </form>
        </div>
    )
}

export default ActivityForm;