import React, { PureComponent } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Menu>
        <Menu.Item
          name='editorials'
          
          
        >
          Editorials
        </Menu.Item>

        
      </Menu>
        )
    }
}

export default NavBar