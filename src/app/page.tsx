//HOMEPAGE empty slash. 
import ToDoList from "./components/ToDoList"
import StravaButton from "./components/stravaButton"



export default async function Home() {



  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <h1>Home/Login</h1>
  <ToDoList></ToDoList>
  <StravaButton />
  <button><a href ="https://www.strava.com/oauth/authorize?client_id=112421&redirect_uri=http://localhost:3000/dashboard&response_type=code&scope=read">Strava Login</a></button>
  
  </main>)
}

