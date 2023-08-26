'use client'
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





export default function Dashboard() {

  const [code, setCode] = useState("")
  const [accessToken, setToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")
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
        setToken(data.access_token);
        setRefreshToken(data.refresh_token)
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error("An error occurred:", error);
      });
    }
  }, []);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       Dashboard <br></br>
       code: {code} <br/>
       Access Token: {accessToken} <br/>
       Refresh Token: {refreshToken} <br/>
      </main>
    )
  }

