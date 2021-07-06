import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <p style={{"color":"white", "textalign":"center"}}>COPYRIGHT</p>
                    </Container>
                </Navbar>

            </div>
        )
    }
}

export default Footer
