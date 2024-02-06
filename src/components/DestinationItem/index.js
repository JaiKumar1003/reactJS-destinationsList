// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destionationItem} = props
  const {name, imgUrl} = destionationItem
  console.log(name)
  return (
    <li className="list-card">
      <img className="image" src={imgUrl} alt={name} />
      <p className="img-heading">{name}</p>
    </li>
  )
}

export default DestinationItem
