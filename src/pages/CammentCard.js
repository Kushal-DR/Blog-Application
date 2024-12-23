import React from 'react'

const CammentCard = (props) => {

    const {username , cammentdata} = props;
  return (
    <div className='cammentCard'>
      <h3>{username}</h3>
      <p>{cammentdata}</p>
    </div>
  )
}

export default CammentCard
