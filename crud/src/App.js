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
    const newdata = data.filter((item) => item.id === id);
    if (newdata.length > 0) {
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
    <div className="container py-5">
      <div className="card shadow-lg p-4 mb-4">
        <h3 className="mb-4 text-center text-primary">Employee Form</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="Enter First Name"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Enter Last Name"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setAge(Number(e.target.value))}
              value={age}
              placeholder="Enter Age"
            />
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
          {!isupdate ? (
            <button className="btn btn-success px-4" onClick={handleSave}>Save</button>
          ) : (
            <button className="btn btn-warning px-4" onClick={handleUpdate}>Update</button>
          )}
          <button className="btn btn-secondary px-4" onClick={handleClear}>Clear</button>
        </div>
      </div>

      <div className="card shadow-lg p-3">
        <h4 className="mb-3 text-center text-dark">Employee List</h4>
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Sr No</th>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
