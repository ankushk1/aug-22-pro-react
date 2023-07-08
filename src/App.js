import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/component2";
import Component3 from "./components/Component3";
import StateComp from "./components/StateComp";
import StateNonPrimUpdate from "./components/StateNonPrimUpdate";
import PropsComp from "./components/PropsComp";
import { createContext } from "react";
import UseEffectHook from "./components/UseEffectHook";

export const messageContext = createContext(null);
messageContext.displayName = "Message"

function App() {
  const printMessage = (msg) => {
    console.log(msg);
  };

  return (
    <div className="App">
      {/* <StateComp/> */}
      {/* <StateNonPrimUpdate/> */}
      {/* <PropsComp
        name="user1"
        age={10}
        arr={[1, 2, 3]}
        obj={{ city: "Delhi" }}
        isActive={true}
        printMessage={printMessage}
      /> */}

      {/* <PropsComp children="abc">
        {{
          name: "user 1"
        }}
      </PropsComp> */}
      {/* <messageContext.Provider value="Message from App.js">
        <Component1  />
      </messageContext.Provider> */}
      <UseEffectHook/>
    </div>
  );
}

export default App;
