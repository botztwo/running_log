"use client";
import {trpc} from "../_trpc/client"
export default function StravaButton(){

    async function handlepress(){
        const res = await fetch("https://www.strava.com/oauth/authorize?client_id=112421&redirect_uri=http://localhost:3000&response_type=code&scope=read")
    
        if(!res.ok){
          throw new Error ('Failed to fetch data')
        }
        return res
      }

    return (
        <div>
            <button onClick={handlepress}> Connect to Strava </button>
        </div>
    );
}