// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      {/* <EventComponent /> */}
      <UserSearch />
    </div>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);

// ReactDOM.render(<App />, document.querySelector("#root"));
