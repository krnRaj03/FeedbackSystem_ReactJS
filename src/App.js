import React from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import { Fragment } from "react"

function App() {
   
    return (
        <Fragment>
            <Header/>
            <div className="container">
                <FeedbackItem/>
            </div>
            
        </Fragment>

    )
}

export default App