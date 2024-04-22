//HOMEPAGE empty slash. 
import ToDoList from "./components/ToDoList"

export default async function Home() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Home/Login</h1>
    <ToDoList></ToDoList> 
    <button><a href ="https://www.strava.com/oauth/authorize?client_id=112421&redirect_uri=http://localhost:3000/createaccount&response_type=code&scope=read">Strava Login</a></button>
  </main>)
}

