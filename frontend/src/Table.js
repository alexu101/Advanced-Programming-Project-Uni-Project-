import React from 'react'



function Table() {
    const url = new URL("http://localhost:8080/api/groups");

    fetch(url)
        .then(response => {
            console.log('blabla');
            // indicates whether the response is successful (status code 200-299) or not
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            console.log('blabla');
            return response.json()
        })
        .then(data => {
            console.log('blabla');
            console.log(data);
        })
        .catch(error => console.log(error));


    //const groupList = groups.

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Events</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {groupList} */}
                </tbody>
            </table>
        </div>
    )
}

export default Table