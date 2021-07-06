import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

// id doesn't work when i tried to yse it so i used the localhost link directly
const Url = process.env.serverUrl

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktailData: []
        }
    }
    componentDidMount = () => {
         axios.get(`http://localhost:8000/cocktail`).then(response => {
            console.log(response.data.drinks)
            this.setState({
                cocktailData: response.data.drinks
            })           
        }).catch(error => {
            console.log('=============')
            console.log('An error occoured')
            console.log(error.message)
            console.log('=============')
        })
    }
    addToFav=(item)=>{
        const reqbody = {
            strDrink:item.strDrink,
            strDrinkThumb:item.strDrinkThumb,
            idDrink:item.idDrink
        }
        axios.post(`http://localhost:8000/cocktail/favorite`,reqbody)
    }

    render() {
        return (
            <>
                {this.state.cocktailData.map(item => {
                    return <Card style={{ width: '18rem' ,display:'inline-block' }}>
                        <Card.Img variant="top" src={item.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title>{item.strDrink}</Card.Title>
                            <Button onClick={()=>{this.addToFav(item)}} variant="primary">Add To Favorite</Button>
                        </Card.Body>
                    </Card>
                })
                }
            </>

        )
    }
}

export default Home

