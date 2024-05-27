function FeedbackItem({item}) {

  
  return (
    <div className='list'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  )
}

export default FeedbackItem
