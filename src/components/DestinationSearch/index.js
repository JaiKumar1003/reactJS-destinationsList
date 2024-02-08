import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState(() => {
      const searchValue = event.target.value

      return {searchInput: searchValue}
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachObject =>
      eachObject.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-conatiner">
        <div className="destination-card">
          <h1 className="heading">Destination Search</h1>
          <div className="search-card">
            <input
              value={searchInput}
              placeholder="Search"
              className="search-input"
              type="Search"
              onChange={this.onChangeInput}
            />
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              onClick={this.onClickSearch}
            />
          </div>
          <ul className="destination-list-card">
            {searchResult.map(eachObject => (
              <DestinationItem
                destionationItem={eachObject}
                key={eachObject.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
