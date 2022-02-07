import { useState } from "react";
import useFetch from "../Components/Fetch/fetch";
import List from "../Components/Section/list";
import Intro from "../Components/Section/intro";
import SearchForm from "../Components/Forms/searchForm";
import AddForm from "../Components/Forms/addForm";
import UpdateForm from "../Components/Forms/updateForm";
import { parseDate } from "../Components/Utils/index";
import SumFetch from "../Components/Utils/agg";
import ExportReactCSV from "../Components/Utils/exportCSV";

const Home = () => {
  /* DATE & TIME FORMAT */
  var today = new Date();
  const displaytime = parseDate(today);

  /*INITIAL STATE*/
  const { cars, setCars, isPending } = useFetch(
    `http://10.12.248.173:7000/api/vehicles`
  );

  /*REFRESH FUNCTION*/
  const refresh = () => {
    window.location.reload(true);
  };

  /*LIST OF ACTIVE STORES*/
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const TableList = (cars) => {
    const list = cars.map((element) => element.location);
    const uniquelist = list.filter(unique).sort();
    return uniquelist;
  };






  /*NEW VEHICLE FORM: TRACK FORM DISPLAY*/
  const [showAddForm, setShowAddForm] = useState(false);

  /*NEW VEHICLE FORM: TOGGLE FORM DISPLAY*/
  const handleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  /*NEW VEHICLE FORM: POST REQUEST, DECLARING STATE*/
  const initialFormState = {
    location: "",
    stock:"",
    year:"",
    make:"",
    model:"",
    date_in:"",
    currentdate:displaytime
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  /*NEW VEHICLE FORM: POST REQUEST, UPDATING STATE TO USER INPUT*/
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /*NEW VEHICLE FORM: POST REQUEST, UPDATE STATE AND TRIGGER RE-RENDER*/
  const confirmpost = (car) => {
    setCars([...cars, car]);
  };

  /*NEW VEHICLE FORM: POST REQUEST, SUBMIT TO SERVER*/
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const car = formData;
    fetch(`http://10.12.248.173:7000/api/vehicles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(`Added Successfully: ${response}`);
        return response;
      })
      .then((car) => confirmpost(car))
      .then(() => handleAddForm())
      .then(() => refresh())
      .catch((error) => console.log("Form submit error", error));

    setFormData({ ...initialFormState });
  };






  /*DELETE APPLICANT: UPDATE STATE< TRIGGER RE-RENDER*/
  const deleteCar = (id) => {
    const updatedTable = cars.filter((item) => item.vehicle_id != id);
    setCars(updatedTable);
  };

  /*DELETE APPLICANT: SERVER REQUEST*/
  const handleDelete = (id) => {
    fetch(`http://10.12.248.173:7000/api/vehicles/${id}`, {
      method: "DELETE",
    })
      .then((response) => console.log("Deleted Car"))
      .then(() => deleteCar(id));
  };






  /*UPDATE FORM: TOGGLE FORM DISPLAY*/
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  /*UPDATE FORM: TRACK STATE OF USER SELECTED*/
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedVehicleLocation, setSelectedVehicleLocation] = useState(null);
  const [selectedVehicleStock, setSelectedVehicleStock] = useState(null);

  /*UPDATE FORM: TRACK STATE OF USER SELECTED*/
  const initialStatusState = {
    location:null,
    notes:null
  };

  const [statusData, setStatusData] = useState({ ...initialStatusState });

  /*UPDATE FORM: PASS IN CURRENT USER STATE && TOGGLE FORM ON USER CLICK*/
  const handleUpdateForm = (
    vehicle_id,
    stock,
    location,
    notes
  ) => {
    setShowUpdateForm(!showUpdateForm);
    setSelectedVehicle(vehicle_id);
    setSelectedVehicleLocation(location);
    setSelectedVehicleStock(stock);
    setStatusData({
      location: location,
      notes:notes
    });
    window.scroll(0, 10);
   
  };

  /*UPDATE FROM: UPDATE STATE TO USER INPUT*/
  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    setStatusData({
      ...statusData,
      [name]: value,
    });
  };

  /*UPDATE FORM: SUMBIT UPDATE TO SERVER*/
  const handleUpdate = (id) => {
    fetch(`http://10.12.248.173:5000/api/vehicles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusData),
    })
      .then((response) => response.json())
      .then(() => confirmUpdate(id))
      .then(() => refresh());

    setStatusData({ ...initialStatusState });
  };

  /*UPDATE FORM: UPDATE STATE TRIGGER RE-RENDER*/
  const confirmUpdate = (id) => {
    const updatedTable = cars.map((item) =>
      item.vehicle_id != id
        ? item
        : {
            ...item,
            location: statusData.location,
            notes: statusData.notes
          }
    );
    setCars(updatedTable);
    handleUpdateForm(id);
  };


  /*OUTPUT*/
  return (
    <div>
      <ExportReactCSV csvData={cars} fileName={`ApplicantsTracker_${displaytime}`} />

      <Intro displaytime={displaytime} SumFetch={SumFetch} />

      <div className="add-applicant">
        <button className="add-applicant-btn" onClick={handleAddForm}>
          Add Applicant
        </button>
      </div>
      <SearchForm data={cars} setData={setCars} />

      {showAddForm ? (
        <AddForm
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />
      ) : null}

      {showUpdateForm ? (
        <UpdateForm
          data={cars}
          selectedVehicle={selectedVehicle}
          selectedVehicleStock={selectedVehicleStock}
          selectedVehicleLocation={selectedVehicleLocation}
          handleUpdateForm={handleUpdateForm}
          statusData={statusData}
          handleStatusChange={handleStatusChange}
          handleUpdate={handleUpdate}
          showUpdateForm={showUpdateForm}
          setShowUpdateForm={setShowUpdateForm}
        />
      ) : null}

      <hr></hr>

      {!isPending ? (
        TableList(cars).map((element) => (
          <div>
            {" "}
            <List
              cut={element}
              data={cars}
              isPending={isPending}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              handleStatusChange={handleStatusChange}
              showUpdateForm={showUpdateForm}
              handleUpdateForm={handleUpdateForm}
              displaytime={displaytime}
            />
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Home;
