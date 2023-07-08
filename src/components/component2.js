import { useContext } from "react"
import { messageContext } from "../App"


function Component2 () {

  const message = useContext(messageContext)
  return (
    <div>
      This is component 2

      <h1>
        {/* {message} */}

        {/* <messageContext.Consumer>
          {(val) => <h1>{val}</h1>}
        </messageContext.Consumer> */}

        <h1>{message}</h1>
      </h1>
    </div>
  )
}

export default Component2