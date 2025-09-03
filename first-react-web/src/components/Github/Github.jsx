import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // useLoaderData() is a React Router hook that allows us to fetch 
    // and use the data returned by the loader function (githubInfoLoader in this case).
    const data = useLoaderData()

    // ---------------- ALTERNATIVE WAY (Commented out) ----------------
    // The below code is an alternative way of fetching GitHub data manually
    // using useState and useEffect without relying on React Router loader.

    // const [data, setData] = useState([])   // Local state to hold API response

    // useEffect(() => {
    //   // Fetching GitHub API data on component mount
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())  // Convert response to JSON
    //     .then(data => {
    //        console.log(data);               // Log data in console for debugging
    //        setData(data)                    // Save the fetched data in state
    //     })
    // }, []) // Empty dependency array ensures it runs only once on mount
    
  return (
    // JSX to render GitHub data
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        {/* Display the number of followers from fetched data */}
        Github followers: {data.followers}

        {/* Display the user's GitHub profile image */}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// ------------------ DATA LOADER FUNCTION ------------------
// githubInfoLoader is an async function that fetches data before the component renders.
// React Router calls this loader and provides the returned data to the component via useLoaderData().
export const githubInfoLoader = async () => {
    // Fetch GitHub user details from the API
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    // Convert the response into JSON and return it.
    // This returned data becomes available in the component through useLoaderData().
    return response.json()
}
