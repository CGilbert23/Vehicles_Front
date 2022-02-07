import { useEffect, useState } from "react";

function SearchForm({ data, setData }) {
  /*STATE MANAGEMENT: TRACK USER INPUT INTO SEARCH BOX*/
  const [searchValue, setSearchValue] = useState("");

  /*UPDATE SEARCH VALUE TO USER INPUT*/
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  /*UPDATE DATA WHEN SEARCH IS MADE*/
  useEffect(() => {
    setData(
      data.filter(
        (currenttable) =>
          currenttable.stock
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          currenttable.make
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          currenttable.model.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]);

  /*RESET THE SEARCH BAR AND RENDER ALL DATA */
  const handleReset = () => {
    setSearchValue("");
  };

  /*OUTPUT */
  return (
    <form>
      <label htmlFor="search">Search: </label>
      <input
        className="search-vehicle"
        type="text"
        name="search"
        placeholder="Search by stock, make, or model"
        onChange={(event) => handleChange(event)}
        value={searchValue}
      ></input>
      <button className="search-btn" onClick={handleReset}>
        Refresh
      </button>
    </form>
  );
}

export default SearchForm;
