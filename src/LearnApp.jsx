import { useState } from "react";
import { Atomic1, Atomic2 } from "./learn/AtomicIs";
import "./styles/App.css";
import SearchList from "./components/learn/SearchList";

function App() {
  const [actionState, setActionState] = useState({
    homework: true,
    vacation: false,
  });

  const handleActionState = (actionName, nextAction) => {
    setActionState({
      ...actionState /* { homework, vacation } */,
      [actionName]: nextAction,
    });
  };

  return (
    <>
      <SearchList />
      <Atomic1 action={actionState.homework} onAction={handleActionState} />
      <Atomic2 action={actionState.vacation} onAction={handleActionState} />
    </>
  );
}

export default App;
