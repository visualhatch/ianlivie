import React from 'react';
import {Jumbotron} from "react-bootstrap";

import './HeaderJumbotron.css'

const HeaderJumbotron = ({pageName}) => {
    return (
        <Jumbotron className={'headerJumbotron'}>
            <h1>{pageName}</h1>
        </Jumbotron>
    );
};

export default HeaderJumbotron;