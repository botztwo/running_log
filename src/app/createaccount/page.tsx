'use client'
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';




const getStravaAccessToken = async (code: string) => {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: "112421",
      client_secret: "fed6b3bafd6abecf44c1d8d442560a8bf125b0d1",
      code,
      grant_type: "authorization_code",
    }),
  });
  return response.json();
};





export default function CreateAccount() {

  const [code, setCode] = useState("")
  const [accessToken, setToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [profilePic, setProfilePic] = useState("")



  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const codeValue = urlSearchParams.get('code');
    console.log(codeValue);
    if (codeValue) {
      setCode(codeValue);
    getStravaAccessToken(codeValue) // Pass codeValue here
      .then(data => {
        // Handle the response data here
        console.log("Access token data: ", data);
        console.log("Access token data: ", data.access_token);
        console.log("Refresh token data: ", data.refresh_token);
        console.log("Name: ",  data.athlete.firstname);
        setToken(data.access_token);
        setRefreshToken(data.refresh_token);
        setFirstName(data.athlete.firstname);
        setLastName(data.athlete.lastname);
        setProfilePic(data.athlete.profile);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error("An error occurred:", error);
      });
    }
  }, []);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome, {firstName} {lastName} </h1>
        <img src= {profilePic} alt="Strava Profile Image" />
        Page where user is going to confirm & log information. <br></br>
        To-DO: Dispaly Name, photo, etc. Have the user then add in their goals, etc. <br></br>
        code: {code} <br/>
        Access Token: {accessToken} <br/>
        Refresh Token: {refreshToken} <br/>
        <section className= "goals">
          <div> Date of Marathon? </div>
          <div> Goal Mileage Per week? </div>
          <div>Monday: </div>
          <div>Tuesday: </div>
          <div>Wednesday: </div>
          <div>Thursday: </div>
          <div>Friday: </div>
          <div>Saturday: </div>
          <div>Sunday: </div>
        </section>
      </main>
    )
  }

