import React from 'react';

export default ({ records, auth: { user } }) =>
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">View</th>
            </tr>
        </thead>
        <tbody>
            {
                records.map((record, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{record.name}</td>
                        <td>{record.quantity}</td>
                        <td>{record.price}</td>
                        <td><button type="button" style={{marginRight: 20}} className="btn btn-outline-success">View
                        </button></td>
                    </tr>
                ))
            }

        </tbody>
    </table>
