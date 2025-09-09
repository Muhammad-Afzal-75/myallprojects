import './App.css';
import React, { useEffect, useState } from 'react';
import { EmpoloyeData } from './EmpoloyeData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [isupdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmpoloyeData);
  }, []);

  const handleEdit = (id) => {
    alert(id);
    const newdata = data.filter((item) => item.id === id);
    if (newdata !== undefined) {
      setIsUpdate(true);
      setId(id);
      setFirstName(newdata[0].firstName);
      setLastName(newdata[0].lastName);
      setAge(newdata[0].age);
    }
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm('Are you sure to delete this item?')) {
        const newdata = data.filter((item) => item.id !== id);
        setData(newdata);
      }
    }
  };

  const handleSave = () => {
    let error = '';
    if (firstName === '') error += 'First name is required. ';
    if (lastName === '') error += 'Last name is required. ';
    if (age <= 0) error += 'Age must be greater than 0.';

    if (error === '') {
    
      const newObject = {
        id: data.length + 1, 
        firstName: firstName,
        lastName: lastName,
        age: age
      };

      const dt = [...data]; 
      dt.push(newObject); 

      setData(dt); 
      handleClear(); 
      alert("Record Saved");
    } else {
      alert(`Error: ${error}`);
    }
  };

  const handleUpdate = () => {
    const index = data.map((item) => item.id).indexOf(id);
    const newdata = [...data];

    newdata[index] = {
      ...newdata[index],
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    setData(newdata);
    handleClear();
  };

  const handleClear = () => {
    setId(0);
    setFirstName('');
    setLastName('');
    setAge(0);
    setIsUpdate(false);
  };

  return (
    <div className="App">
      <div className='bg'>
        <label className='lab'>First Name</label>
        <input type='text' onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='Enter your First Name' />&nbsp;
        <label>Last Name</label>
        <input type='text' onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Enter your Last Name' />&nbsp;
        <label>Age</label>
        <input type='number' onChange={(e) => setAge(Number(e.target.value))} value={age} />&nbsp;

        {
          !isupdate ?
            <button className='btn btn-primary' onClick={handleSave}>Save</button>
            :
            <button className='btn btn-primary ms-2' onClick={handleUpdate}>Update</button>
        }
        <div>
          <button className='btn btn-danger ms-2' onClick={handleClear}>Clear</button>
        </div>
      </div>

      <table className='table table-hover table-striped'>
        <thead>
          <tr>
            <td>Sr No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
