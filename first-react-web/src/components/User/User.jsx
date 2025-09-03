import React from 'react'
// Importing React to create the functional component

import { useParams } from 'react-router-dom'
// Importing useParams hook from react-router-dom
// This hook allows us to access dynamic parameters from the URL (like /user/:userid)

function User() {
    // Extracting the 'userid' parameter from the URL using useParams
    const { userid } = useParams()

    // Returning JSX to render the UI
    return (
        // A styled div that displays the user id fetched from the URL
        <div className='bg-gray-600 text-white text-3xl p-4'>
            User: {userid}
        </div>
    )
}

export default User
// Exporting the User component so it can be imported and used in other parts of the app
