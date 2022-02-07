import { dateDifference, parseDate } from "../Utils/index";
import agg from "../Utils/agg";

function List({ cut, data, handleDelete, handleUpdateForm }) {
    /*CURRENT DATE*/
    const currentDate = new Date();
    
    
    /*DISTRIBUTE DATA BY APPLICANT LOCATION*/
    const storeTable = data.filter((item) => item.location === cut);

    console.log(storeTable)
    const table = storeTable.map(
        (
            {
                vehicle_id,
                location,
                stock,
                year,
                make,
                model,
                notes,
                date_in,

                annex_completion,
                autoexpress_completion,
                detail_completion,
                holding_completion,
                recon_completion,
                service_completion,
                torro_completion,
                vendor_completion,

                annex_var,
                autoexpress_var,
                detail_var,
                holding_var,
                recon_var,
                service_var,
                torro_var,
                vendor_var
            },
            index
        ) => (
            <tr>
                <td className="row-longbox" key={vehicle_id}>
                    {cut}
                </td>
                <td className="row-medbox">{stock}</td>
                <td className="row-medbox">{year}</td>
                <td className="row-medbox">{make}</td>
                <td className="row-medbox">{model}</td>
                <td className="row-medbox">{notes}</td>
                <td className="row-medbox-center">{parseDate(date_in)}</td>

                <td className="row-shortbox-center">
                    <button
                        className={"click"}
                        onClick={() =>
                            handleUpdateForm(
                                vehicle_id,
                                stock,
                                location,
                                notes
                            )
                        }
                    >
                        Update
                    </button>
                </td>
                <td className="row-shortbox-center">
                    <button
                        className={"click"}
                        onClick={() => handleDelete(vehicle_id)}
                    >
                        Delete
                    </button>
                </td>

                <td className="placeholder-td"></td>
                <td>{dateDifference(currentDate,date_in)}</td>


            </tr>
        )
    );

    return (
        <div>
            <div>
                <h2 className="section-title">{cut}</h2>
                <table className="route-table">
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Stock</th>
                            <th>Year</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Notes</th>
                            <th>Date In</th>
                            <th className="row-count">Update Applicant</th>
                            <th className="row-count">Delete Applicant</th>

                            <th className="placeholder-th"></th>

                            <th className="row-count">Variance</th>


                            <th className="placeholder-th"></th>

                        </tr>
                    </thead>
                    <tbody> {table}</tbody>
                </table>
            </div>
        </div>
    );
}

export default List;
