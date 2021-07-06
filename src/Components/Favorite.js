import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateForm from './UpdateForm';
const axios = require('axios');

export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktailFav: [],
            show: false,
            idx: -1
        }
    }
    componentDidMount = () => {
        axios.get(`http://localhost:8000/cocktail/favorite`).then(response => {
            this.setState({
                cocktailFav: response.data
            })
        }).catch(error => {
            console.log('=============')
            console.log('An error occoured')
            console.log(error.message)
            console.log('=============')
        })
    }
    removeFromFav = (idx) => {
        axios.delete(`http://localhost:8000/cocktail/favorite/${idx}`).then(response => {
            this.setState({
                cocktailFav: response.data
            })
        }).catch(error => {
            console.log('=============')
            console.log('An error occoured')
            console.log(error.message)
            console.log('=============')
        })
    }
    handleShow = (idx) => {
        this.setState({
            show: true,
            idx: idx
        })
    }
    handleClose = (idx) => {
        this.setState({
            show: false

        })
    }
    UpdateData = (e) => {
        e.preventDefault();
        const reqbody = {
            strDrink: e.target.title.value,
        }
        axios.put(`http://localhost:8000/cocktail/favorite/${this.state.idx}`,reqbody).then(response => {
            this.setState({
                cocktailFav: response.data
            })

        }).catch(error => {
            console.log('=============')
            console.log('An error occoured')
            console.log(error.message)
            console.log('=============')
        })
        }


    render() {
            return(
            <>
        {
            this.state.cocktailFav.map((item, idx) => {
                return <Card style={{ width: '18rem', display: 'inline-block' }}>
                    <Card.Img variant="top" src={item.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{item.strDrink}</Card.Title>
                        <Button onClick={() => { this.removeFromFav(idx) }} variant="primary">Remove</Button>
                        <Button onClick={() => { this.handleShow(idx) }} variant="primary">Update</Button>
                    </Card.Body>
                </Card>
            })

        }
        < UpdateForm
                    handleClose = { this.handleClose }
                    show = { this.state.show }
                    UpdateData = { this.UpdateData }
            />


            </>
        )
    }
}

export default Favorite
