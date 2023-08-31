import './App.css'
import { ArrivalList } from "./components/ArrivalList"
import { Counter } from "./components/Counter/Counter"
import { ErrorComponent } from "./components/Error"
import { StopList } from "./components/StopList"

function App() {

  return (
    <>
      <h1>Bus board</h1>
      <Counter />
      <hr />
      <StopList latitude={51.5670016} longitude={-0.1048576} />
      <hr />
      <ArrivalList id={"490015078L"} />
      <hr />
      <ErrorComponent />
    </>
  )
}

export default App
