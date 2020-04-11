import React, { PureComponent } from 'react'
import { Button, Segment, Divider, Container } from 'semantic-ui-react'

class ContactPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <Container textAlign={'center'}>
<Button className="ui button testButton" >Click Here</Button>
        </Container>

            

        )
    }
}

export default ContactPage