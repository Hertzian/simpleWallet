import React from 'react';

const TranferList = ({transfers}) => (

    <table className="table">
        <tbody>
        {
            transfers.map((transfer) => (
                <tr key={ transfer.id }>
                    <td>{ transfer.description }</td>
                    <td className={transfer.amount > 0 ? 'font-weight-bold text-success' : 'font-weight-bold text-danger'}>{ transfer.amount }</td>
                </tr>
            ))
        }
        </tbody>
    </table>

)

export default TranferList;