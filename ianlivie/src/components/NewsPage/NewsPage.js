import React from 'react';
import Nav from "../Navigation/NavBar/NavBar";
import HeaderJumbotron from "../Jumbotrons/HeaderJumbotron/HeaderJumbotron";
import {Container} from "react-bootstrap";
import Footer from "../Navigation/Footer/Footer";
import NewsCard from "./NewsCard/NewsCard";

const NewsPage = () => {
    return (
        <Container fluid className={'mainContainer'}>
            <Nav/>
            <HeaderJumbotron pageName={'News'}/>
            <Container>
                <NewsCard imageURL={'https://via.placeholder.com/400x200?text=NEWS+IMAGE+1+400+x+200'} date={'12th April 2020'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae blanditiis consequatur consequuntur dignissimos enim minima possimus sed? Cumque eligendi eos excepturi facere natus odit quas quidem similique unde voluptatem?'} link={'newsLinkHere'}/>
                <NewsCard imageURL={'https://via.placeholder.com/400x200?text=NEWS+IMAGE+2+400+x+200'} date={'1st March 2020'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae blanditiis consequatur consequuntur dignissimos enim minima possimus sed? Cumque eligendi eos excepturi facere natus odit quas quidem similique unde voluptatem?'} link={'newsLinkHere'}/>
                <NewsCard imageURL={'https://via.placeholder.com/400x200?text=NEWS+IMAGE+3+400+x+200'} date={'20th December 2019'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae blanditiis consequatur consequuntur dignissimos enim minima possimus sed? Cumque eligendi eos excepturi facere natus odit quas quidem similique unde voluptatem?'} link={'newsLinkHere'}/>

            </Container>

            <Footer/>
        </Container>
    );
};

export default NewsPage;

