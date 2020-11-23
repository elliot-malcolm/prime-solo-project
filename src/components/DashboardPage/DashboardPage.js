import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class DashboardPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({
        type: 'FETCH_PLANTS'
    })
  }

  deletePlant = (event, param) => {
    console.log(event, param)
    let plantData = {
      id: param
    }
    this.props.dispatch({
      type: 'DELETE_PLANT',
      payload: plantData
    })
  }

    render() {
        return (
            <div>
            {this.props.store.plantsReducer.map( plant => {
              return (
              <li key={plant.id}>
                <img className="plantImage" src={plant.image_url} alt={plant.type}/>
                <ul><li>Name:{plant.name}</li>
                <li>Type:{plant.type}</li>
                <li>Size:{plant.size}</li>
                <li>Notes:{plant.notes}</li>
                <li>List?:{plant.list}</li>
                <li>Scientific Name:{plant.sci_name}</li>
                </ul>

                <button id="deleteBtn" onClick={(event) => this.deletePlant(event, plant.id)}>Delete Plant</button>
              </li>
              );
            })}
          </div>
        );
    }
}
export default connect(mapStoreToProps)(DashboardPage);