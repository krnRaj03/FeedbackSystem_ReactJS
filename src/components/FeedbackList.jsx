import FeedbackItem from "./FeedbackItem"


function FeedbackList({ feedback }) {
    if (!feedback || feedback.lenght === 0) {
        return <p>No Items found!</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (<FeedbackItem item={item}/>))}
        </div>
    )
}

export default FeedbackList
