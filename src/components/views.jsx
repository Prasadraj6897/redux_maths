import React from "react"
import 'mdbreact/dist/css/mdb.css'

import { MDBContainer, MDBRow, MDBCol ,MDBInput, MDBBtn,   } from "mdbreact";
import {additionaction, subtraction, multiplicaction, divisionaction} from "../redux/reducer_action/action"
import {useDispatch, useSelector} from 'react-redux'

let Views =() => {
    let [state, setState] = React.useState({
        count1: 0,
        count2: 0
    })
    const dispatch = useDispatch()
    
    let MAthvalue = useSelector((state) => {
        
        return state
    })

    function handleChange(evt) {
    let value = evt.target.value;
    const re = /^[0-9\b]+$/;
    if (((evt.target.value === '') || (re.test(evt.target.value))) && (evt.target.value != 'e')) {
        setState({
            ...state,
            [evt.target.name]: parseInt(value, 10)
        });
    }
    // console.log(state)
    }
    function handleAddsubmit  ()  {
        let data = {count1:state.count1, count2:state.count2}
        dispatch(additionaction(data))
    }
    function handleSubsubmit  ()  {
        let data = {count1:state.count1, count2:state.count2}
        dispatch(subtraction(data))
    }
    function handleMulsubmit  ()  {
        let data = {count1:state.count1, count2:state.count2}
        dispatch(multiplicaction(data))
    }
    function handleDivsubmit  ()  {
        let data = {count1:state.count1, count2:state.count2}
        dispatch(divisionaction(data))
    }

    return (
        <MDBContainer>
             <h3 className="font-weight-bold">Maths Reducer</h3>
            <MDBRow>
                {/* <pre>{JSON.stringify(MAthvalue)}</pre> */}
               
                <MDBCol sm="6">
                    <MDBInput label="Enter your number 1" name="count1" type="number" value={state.count1} onChange={handleChange}/>
                </MDBCol>
                <MDBCol sm="6">
                    <MDBInput label="Enter your number 2" name="count2" type="number" value={state.count2} onChange={handleChange}/>
                </MDBCol>
                <MDBCol sm="3">
                    <MDBInput label="Addition value" disabled type="text" value={MAthvalue.RootReducers.additionvalue}  background size="sm"/>
                </MDBCol>
                <MDBCol sm="3">
                    <MDBInput label="Subtraction value" disabled type="text" value={MAthvalue.subtrationreducer.subtractionvalue}  background size="sm"/>
                </MDBCol>
                <MDBCol sm="3">
                    <MDBInput label="Multiplication value" disabled type="text" value={MAthvalue.multiplicationreducer.multiplicationvalue}  background size="sm"/>
                </MDBCol>
                <MDBCol sm="3">
                    <MDBInput label="Division value" disabled type="text" value={MAthvalue.divisionreducer.divisionvalue}  background size="sm"/>
                </MDBCol>

                <br></br>
                <MDBBtn type="submit" rounded onClick = {handleAddsubmit}>Addition</MDBBtn><br></br>
                <MDBBtn type="submit" rounded color = "primary" rounded onClick = {handleSubsubmit}>Subtraction</MDBBtn><br></br>
                <MDBBtn type="submit" rounded color = "success" rounded onClick = {handleMulsubmit}>Multiplication</MDBBtn><br></br>
                <MDBBtn type="submit" rounded color = "warning" rounded onClick = {handleDivsubmit}>Division</MDBBtn><br></br>
            </MDBRow>
        </MDBContainer>
    )
}
export default Views;