import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUser] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    //load users from Localstorage
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUser(parsedUser);
            } catch (error) {
                console.log("error parsing data", error);
                localStorage.removeItem("users");//clear corrupted data

            }
        }
        setIsLoading(true); //mark as load
    }, [])

    //save users to local storage

    useEffect(() => {
        if (isLoading) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isLoading])

    //update formData field dynamically as user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    //validation
    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData

        if (!name.trim()) newErrors.name = 'name is required';

        if (!email) newErrors.email = 'email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email is invalid';

        if (!age) newErrors.age = "age is required";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "age must be 1 to 120";

        return newErrors;
    }

    // form submition
    const handleSubmit = (e) => {
        e.preventDefault();
        const valisationErrors = validate();

        if (Object.keys(valisationErrors).length > 0) {
            setError(valisationErrors);
            return;
        }

        if (editMode) {
            setUser(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString };
            setUser([...users, newUser])
        }

        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        });

        setError({});
    }

    const handleEdit = (us) => {
        setFormData(us);
        setEditMode(true);
    }

    const HandleCancel = () => {
        setFormData({ id: '', name: '', email: '', age: '' });
        setEditMode(false);
        setError({})
    }

    const handleDelete = (id) => {
        setUser(users.filter(user => user.id !== id));
    }
    const handleClearAll = () => {
        if (window.confirm('Are you sure that you want to clear all datas?This action cannot be undone.')) {
            setUser([]);
            localStorage.removeItem("users");
            //also clear the form if in edit mode
            if (editMode) {
                setFormData({ id: '', name: '', email: '', age: '' });
                setEditMode(false);
                setError({});
            }
        }
    }

    return (
        <div>
            <h1>React CRUD - simple form</h1>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='your name' />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                {/* email */}
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='your email' />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                {/* age */}
                <div>
                    <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='your age' />
                    {error.age && <p style={{ color: 'red' }}>{error.age}</p>}
                </div>
                <button type='submit'>{editMode ? 'Update User' : 'Add User'}</button>
                {
                    editMode && (
                        <button type="button" onClick={HandleCancel} style={{ marginLeft: '10px' }}>Cancel</button>
                    )
                }
            </form>

            <hr />
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' , marginBottom:'10px'}}>
                <h2>User list</h2>
                {/* clear data button */}
                {users.length > 0 && (
                    <button
                        onClick={handleClearAll}
                        style={{
                            background: 'blue',
                            color: 'white',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginLeft: '30px'
                        }}>Clear all Data
                        
                    </button>
                )}
            </div>

            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>age</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(us => (
                            <tr key={us.id}>
                                <td>{us.name}</td>
                                <td>{us.email}</td>
                                <td>{us.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(us)}>edit</button>
                                    <button onClick={() => handleDelete(us.id)} style={{ marginLeft: '10px' }}>delete</button>
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users added yet</p>

            )}

        </div>
    )
};

export default Crud;

