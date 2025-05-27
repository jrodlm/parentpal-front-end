const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/children`;

const index = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};


const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (formData, childId) => {
    try {
        const res = await fetch(`${BASE_URL}/${childId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

const deleteChild = async (childId) => {
    try {
        const res = await fetch(`${BASE_URL}/${childId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': "application/json"
            },
        })
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

export {
    index,
    create,
    update,
    deleteChild
}