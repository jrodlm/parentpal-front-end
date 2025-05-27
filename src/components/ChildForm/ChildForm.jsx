import { useState, useEffect } from 'react';

const initialState = {
    name: '',
    birthdate: '',
    gender: '',
    age: ''
}

const ChildForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    useEffect(() => {
        if (props.selected) {
            setFormData(props.selected);
        } else {
            setFormData(initialState);
        }
    }, [props.selected]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.selected) {
            props.handleUpdateChild(formData, props.selected._id)
        } else {
            props.handleAddChild(formData)
            setFormData(initialState);
        }
    }

    const formatDateForInput = (dateValue) => {
        const date = new Date(dateValue);
        return !isNaN(date) ? date.toISOString().split('T')[0] : '';
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="birthdate"> Birthdate </label>
                <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    value={
                        formatDateForInput(formData.birthdate)}
                    onChange={handleChange}
                />
                <label htmlFor="age"> Age </label>
                <input
                    id="age"
                    name="age"
                    value={formData.age || ''}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a gender</option>
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                </select>
                <button type="submit">{props.selected ? "Update Child" : " Add New Child"}</button>
            </form>
        </div>
    )
}

export default ChildForm;