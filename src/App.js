import React from "react"
import Header from "./components/Header"
import { Fragment } from "react"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"

function App() {
    const [feedback, setFeedback]=useState(FeedbackData)

    return (
        <Fragment>
            <Header/>
            <div className="container">
               <FeedbackList feedback={feedback}/>
            </div>
            
        </Fragment>

    )
}

export default App