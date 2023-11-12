import { Count } from "./components/Count";
import { Name } from "./components/Name";

function App() {

  return (
    <main className="min-h-screen w-full bg-neutral-950 flex flex-col justify-center items-center">
      <Count />
      <br />
      <Name />
    </main>
  )
}

export default App
