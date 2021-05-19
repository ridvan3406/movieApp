import React, { Component } from 'react'
import {Container,Image,Menu,Visibility,} from 'semantic-ui-react'
import { Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Visibility once={false}>
                    <Menu borderless>
                        <Container text>
                            <Menu.Item>
                                <Image size='mini' src='https://cdn.dribbble.com/users/2848295/screenshots/14316590/media/bdcb2bfcef72be318f53600eaea0bd3d.jpg?compress=1&resize=400x300' />
                            </Menu.Item>
                            <Menu.Item header as={Link} to="/">Movie App</Menu.Item>
                            <Menu.Item as={Link} to="movies">Movies</Menu.Item>
                            <Menu.Item as='a'>Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        )
    }
}
