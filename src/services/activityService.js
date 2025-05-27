const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/activity`;

const getAllForChild = async (childId) => {
    try {
        const res = await fetch(`${BASE_URL}/child/${childId}`, {
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
        const res = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

export { getAllForChild, create };
