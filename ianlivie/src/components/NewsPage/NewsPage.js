import React from "react";
import Nav from "../Navigation/NavBar/NavBar";
import HeaderJumbotron from "../Jumbotrons/HeaderJumbotron/HeaderJumbotron";
import { Container } from "react-bootstrap";
import Footer from "../Navigation/Footer/Footer";
import NewsCard from "./NewsCard/NewsCard";

const NewsPage = () => {
  return (
    <Container fluid className={"mainContainer"}>
      <Nav />
      <HeaderJumbotron pageName={"News"} />
      <Container>
        <NewsCard
          imageURL={
            "https://via.placeholder.com/300x200?text=NEWS+IMAGE+1+300+x+200"
          }
          date={"12th April 2020"}
          title={'GrandMA 3 - Now In Stock'}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae blanditiis consequatur consequuntur dignissimos enim minima possimus sed? Cumque eligendi eos excepturi facere natus odit quas quidem similique unde voluptatem?"
          }
          link={"/news/news-article/news1"}
        />
        <NewsCard
          imageURL={
            "https://via.placeholder.com/300x200?text=NEWS+IMAGE+2+300+x+200"
          }
          date={"1st March 2020"}
          title={'NEWS 2 Title'}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae blanditiis consequatur consequuntur dignissimos enim minima possimus sed? Cumque eligendi eos excepturi facere natus odit quas quidem similique unde voluptatem?"
          }
          link={"/news/news-article/news2"}
        />
        <NewsCard
          imageURL={
            "https://via.placeholder.com/300x200?text=NEWS+IMAGE+3+300+x+200"
          }
          date={"20th December 2019"}
          title={'NEWS 3 Title'}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae blanditiis consequatur consequuntur dignissimos enim minima possimus sed? Cumque eligendi eos excepturi facere natus odit quas quidem similique unde voluptatem?"
          }
          link={"/news/news-article/news3"}
        />
      </Container>

      <Footer />
    </Container>
  );
};

export default NewsPage;
