import { useState } from "react";

/*CHECK FOR USER INPUT BEFORE SUBMIT*/


const UpdateForm = ({
  selectedVehicle,
  selectedVehicleStock,
  selectedVehicleLocation,
  handleUpdate,
  handleStatusChange,
  statusData,
  setShowUpdateForm,
  showUpdateForm
}) => {

  return (
    <div>
      <div>
        <h3 className="update-header">Update Vehicle: {selectedVehicleStock}</h3>

        <table className="route-table">
          <thead>
            <tr>
              <th>Current Location</th>
              <th>Current Notes</th>
              <th className="placeholder-th"></th>
              <th>Updated Location</th>
              <th>Updated Notes</th>
              <th className="placeholder-th"></th>
              <th className="row-shortbox-center">Update</th>
              <th className="row-shortbox-center">Close</th>
            </tr>
          </thead>
          <tbody>
            <td className="row-longbox">{selectedVehicleLocation}</td>
            <td className="row-longbox">{selectedVehicleLocation}</td>
            <td className="placeholder-td"></td>
            <td className="row-shortbox">
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedVehicle)
                }
                className="update-form-dropdown"
                id="location"
                name="location"
              >
                <option value="">{statusData.location}</option>
                <option value="Complete"> Annex</option>
                <option value="Scheduled"> Detail </option>
                <option value="Incomplete"> Holding </option>
              </select>
            </td>
            <td>
              <textarea
              onChange={(event)=> handleStatusChange(event, selectedVehicle)}
              id="notes"
              name="notes"
              >
              
              </textarea>
            </td>
            <td className="placeholder-td"></td>
            <td className="row-shortbox-center">
              <button
                className="update-click"
                type="submit"
                onClick={() => handleUpdate(selectedVehicle)}
              >
                Submit
              </button>
            </td>
            <td className="row-shortbox-center">
              <button
                className="close-click"
                type="submit"
                onClick={(showUpdateForm) => setShowUpdateForm(!showUpdateForm)}
              >
                X
              </button>
            </td>
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default UpdateForm;
