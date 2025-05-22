// import { useState } from 'react'

// const initialState = {
//         parentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Parent'},
//         name: '',
//         birthdate: {type: Date, default: Date.now},
//         gender: ''
// }

// const ChildForm = (props) => {
//     const [formData, setFormData] = useState(
//         props.selected ? props.selected : initialState
//     )

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if(props.selected) {
//             props.handleUpdateChild(formData, props.selected._id)
//         } else {
//             props.handleAddChild(formData)
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="parentId"> Parent </label>
//                 <input
//                     id="parentId"
//                     name="parentId"
//                     value={formData.parentId}
//                     onChange={handleChange}
//                     required
//                 />
//                 <label htmlFor="name"> Name </label>
//                 <input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="birthdate"> Birthdate </label>
//                 <input
//                     id="birthdate"
//                     name="birthdate"
//                     value={formData.birthdate}
//                     onChange={handleChange}
//                 />
//                 {/* on the below, where should we autocalculate the age? */}
//                 <label htmlFor="age"> Age </label> 
//                 <input
//                     id="age"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     required
//                 />
//                 <label htmlFor="gender"> Gender </label>
//                 <input
//                     id="gender"
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">{props.selected ? "Update Child" :" Add New Child" }</button>
//             </form>
//         </div>
//     )
// }

// export default ChildForm;