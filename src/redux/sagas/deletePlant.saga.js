import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to shelf.router to get all items from shelf DB
function* deletePlant(action) {
  try{
    const results = yield axios.delete(`/api/plant/${action.payload.id}`)  
    if (results.data.rowCount === 0) {
        alert(`Failed to delete!`)
    } else {
        yield put({
            type: "FETCH_PLANTS"
        })
    }
    } catch(error){
    console.log('Error in delete item SAGA',error);
  }
}

function* deletePlantSaga() {
    yield takeEvery('DELETE_PLANT', deletePlant);
  }

export default deletePlantSaga;