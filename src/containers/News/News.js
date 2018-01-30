import React, { Component } from 'react';
import Carousel from '../../hoc/Carousel/Carousel';

import classes from './News.css';

class News extends Component {
    state = {
        news: [
            {
                original_name: "The Flash",
                name: "DC: Flash",
                backdrop_path: "/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg"
              },
              {
                original_title: "Jumanji: Welcome to the Jungle",
                title: "Jumanji: Przygoda w dżungli",
                backdrop_path: "/cpz070zEKbPGXzCWuQsNt42PqXY.jpg",
              },
              {
                original_name: "Supernatural",
                name: "Nie z tego świata",
                backdrop_path: "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg"
              },
              {
                title: "Thor: Ragnarok",
                original_title: "Thor: Ragnarok",
                backdrop_path: "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
              },
              {
                original_name: "Marvel's Agents of S.H.I.E.L.D.",
                name: "Marvel: Agenci T.A.R.C.Z.Y.",
                backdrop_path: "/qtr5i6hOm6oVzTYl3jOQAYP3oc7.jpg"
              },
              {
                title: "Coco",
                original_title: "Coco",
                backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg"
              },
              {
                original_name: "Arrow",
                name: "DC: Arrow",
                backdrop_path: "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg"
              },
              {
                title: "Król rozrywki",
                original_title: "The Greatest Showman",
                backdrop_path: "/zpq404Sk7qQ7N4x3xOeNgp74GtU.jpg"
              },
              {
                original_name: "Grey's Anatomy",
                name: "Chirurdzy",
                backdrop_path: "/y6JABtgWMVYPx84Rvy7tROU5aNH.jpg"
              },
              {
                title: "Naznaczony: Ostatni klucz",
                original_title: "Insidious: The Last Key",
                backdrop_path: "/auSRjQyVLw212IjATAbO3KOyxZg.jpg"
              },
              {
                original_name: "Lucifer",
                name: "DC: Lucyfer",
                backdrop_path: "/6kZCuvbirx6ibJfaWqwV2p90yPI.jpg"
              }
        ]
    }

    render() {
        const news = this.state.news.map((item,i) => {
          let type;
          let original_name;
          let name;
          let description;

          if(item.original_name) {
            type = "Seriale";
            original_name = item.original_name;
            name = item.name;
          } else {
            type = "W kinach";
            original_name = item.original_title;
            name = item.title;
            description = "Już w kinach!";
          }

          return (
            <div key={i} className={classes.News} >
              <div className={classes.Content}>
                  <h3>{type}</h3>
                  <h2>{original_name}</h2>
                  <h1>{name}</h1>
              </div>
              <img src={['https://image.tmdb.org/t/p/original',item.backdrop_path].join('')} alt="" />
            </div>
          )
        });

        const NewsSettings = {
          numberOfSlidesToShow: 1,
        }

        const ExampleSettings = {
          numberOfSlidesToShow: 2,
        }

        return (
          <div>
          <Carousel settings={NewsSettings}>
            {news}
          </Carousel>

          <Carousel settings={ExampleSettings}>
            {news}
          </Carousel>
          </div>
        );
    }
}

export default News;