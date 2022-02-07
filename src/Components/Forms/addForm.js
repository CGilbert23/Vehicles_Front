import { useState } from "react";

/*CHECK FOR USER INPUT BEFORE SUBMIT*/
const handleDisable = (formData) => {
  if (
    formData.location &&
    formData.store &&
    formData.year &&
    formData.make &&
    formData.model &&
    formData.date_in
  )
    return false;
  else return true;
};

const addForm = ({formData, handleFormChange, handleFormSubmit}) => {
  
  const checkDisable = handleDisable(formData);

  return (
    <div>
      <div>
        <label className="add-form-name">Add Vehicle:</label>
      </div>
      <div className="add-form">
      <label className="add-form-label" htmlFor="location">
          Location:
          <select
            className="add-form-dropdown"
            id="location"
            name="location"
            onChange={handleFormChange}
            value={formData.location}
          >
            <option value="">Select option</option>
            <option value="Autoexpress">Autoexpress</option>
            <option value="Annex">Annex</option>
            <option value="Detail">Detail</option>
            <option value="Holding">Holding</option>
            <option value="Service"></option>
            <option value="Ford Doylestown">Ford Doylestown</option>
          </select>
        </label>

    
        <label className="add-form-label" htmlFor="stock">
          Stock #:
          <input
            size={12}
            type="text"
            id="stock"
            name="stock"
            onChange={handleFormChange}
            value={formData.stock}
          ></input>
        </label>

        
    
        <label className="add-form-label" htmlFor="year">
          Year:
          <input
            size={12}
            type="text"
            id="year"
            name="year"
            onChange={handleFormChange}
            value={formData.year}
          ></input>
        </label>

        
    
        <label className="add-form-label" htmlFor="make">
          Make:
          <input
            size={12}
            type="text"
            id="make"
            name="make"
            onChange={handleFormChange}
            value={formData.make}
          ></input>
        </label>

        
    
        <label className="add-form-label" htmlFor="model">
          Model:
          <input
            size={12}
            type="text"
            id="stock"
            name="stock"
            onChange={handleFormChange}
            value={formData.model}
          ></input>
        </label>
       
  
       
        <label className="add-form-label-long" htmlFor="date_in">
          App Recieved:
          <input
            type="date"
            id="date_in"
            name="date_in"
            onChange={handleFormChange}
            value={formData.date_in}
          ></input>
        </label>

        <label className="add-form-label">
          <button
            className="submit-btn"
            disabled={checkDisable}
            onClick={handleFormSubmit}
            type="submit"
          >
            Submit
          </button>
        </label>
      </div>
    </div>
  );
};

export default addForm;
