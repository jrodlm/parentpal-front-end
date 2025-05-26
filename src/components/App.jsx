import '../App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import * as childService from '../services/childService';
import ChildList from '../components/ChildList/ChildList';
import ChildDetail from '../components/ChildDetail/ChildDetail'
import ChildForm from '../components/ChildForm/ChildForm'
import Home from '../pages/Home';
import Login from '../pages/Login';
import NavBar from './NavBar/NavBar';
import SignUpForm from './SignUpForm/SignUpForm';
import SignInForm from './SignInForm/SignInForm';


function App() {
  const [children, setChildren] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const fetchedChildren = await childService.index();
        // Don't forget to pass the error object to the new Error
        if (fetchedChildren.err) {
          throw new Error(fetchedChildren.err);
        }
        setChildren(fetchedChildren);
      } catch (err) {
        // Log the error object
        console.log(err);
      }
    };
    fetchChildren();
  }, []);

  const handleSelect = (child) => {
    setSelected(child)
    setIsFormOpen(false)
  }

  const handleFormView = (child) => {
    if (!child._id) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }

  const handleAddChild = async (formData) => {
    try {
      const newChild = await childService.create(formData)
      if (newChild.err) {
        throw new Error(newChild.err)
      }
      setPets([newChild, ...children])
      setIsFormOpen(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdateChild = async (formData, childId) => {
    try {
      const updatedChild = await childService.update(formData, childId);

      // handle potential errors
      if (updatedChild.err) {
        throw new Error(updatedChild.err);
      }

      const updatedChildList = children.map((child) => (
        // If the _id of the current pet is not the same as the updated pet's _id,
        // return the existing pet.
        // If the _id's match, instead return the updated pet.
        child._id !== updatedChild._id ? pet : updatedChild
      ));
      // Set pets state to this updated array
      setPets(updatedChildList);
      // If we don't set selected to the updated pet object, the details page will
      // reference outdated data until the page reloads.
      setSelected(updatedChild);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteChild = async (childId) => {
    try {
      const deletedChild = await childService.deleteChild(childId)

      if (deletedChild.err) {
        throw new Error(deletedChild.err)
      }

      setChildren(children.filter((pet) => child._id !== deletedChild._id))
      setSelected(null)
      setIsFormOpen(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'
          element={
            <>
              <h1>Welcome To ParentPal</h1>

              <ChildList 
                children={children}
                handleSelect={handleSelect}
                handleFormView={handleFormView}
                isFormOpen={isFormOpen}
              />

              {isFormOpen ? (
              <ChildForm
                handleAddChild={handleAddChild}
                selected={selected}
                handleUpdateChild={handleUpdateChild}
              />
              ) : (
              <ChildDetail
                selected={selected}
                handleFormView={handleFormView}
                handleDeleteChild={handleDeleteChild}
              />
            )} 
        </>
          }
          />
              <Route path='/sign-up' element={<SignUpForm />} />
              <Route path='/sign-in' element={<SignInForm />} />
            </Routes>
        </>
        )
}

        export default App;