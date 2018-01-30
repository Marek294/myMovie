import React, { Component } from 'react';

import classes from './TopRatedTv.css';

class TopRatedTv extends Component {
    state = {
        topRated: [
            {
                original_name: "Rick and Morty",
                name: " Rick i Morty",
                vote_average: 8.5,
                overview: "Głównymi bohaterami są dziadek i wnuczek. Dziadek, Rick, to szalony wynalazca, który podróżuje przez odległe światy z taką swobodą, z jaką inni dziadkowie spacerują po parku. Wnuczek, Morty, to zwykły dzieciak, zakochany w koleżance z klasy i opuszczający coraz więcej lekcji z powodu przygód, które przeżywa z dziadkiem.",
                poster_path: "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
              },
              {
                original_name: "Stranger Things",
                name: "Stranger Things",
                vote_average: 8.4,
                overview: "Akcja serialu rozgrywa się w 1983 roku w stanie Indiana, USA. W spokojnej,  podmiejskiej dzielnicy ginie chłopiec. Przyjaciele, rodzina i policja  zaczynają poszukiwania, jednak zaginięcie chłopca okazuje się być  początkiem złożonej historii, której meandry są coraz bardziej zawiłe: w  miasteczku nagle pojawia się dziwna dziewczynka niewiadomego  pochodzenia, a trop śledztwa prowadzi do odkrycia tajnych eksperymentów  rządowych.",
                poster_path: "/esKFbCWAGyUUNshT5HE5BIpvbcL.jpg"
              },
              {
                original_name: "Breaking Bad",
                name: "Breaking Bad",
                vote_average: 8.3,
                overview: "Głównym bohaterem \"Breaking Bad\" jest Walter White (Bryan Cranston), nauczyciel chemii mieszkający w Nowym Meksyku wraz z żoną (Anna Gunn) oraz nastoletnim synem (RJ Mitte) cierpiącym na porażenie mózgowe. Kiedy u Waltera zostaje zdiagnozowany rak w trzecim stadium, lekarze rokują, że pozostały mu dwa lata życia. Dzięki tym prognozom Walter wyzbywa się wszelkich lęków i pragnąc zabezpieczyć swoją rodzinę finansowo decyduje się wkroczyć do niebezpiecznego świata narkotyków i zbrodni. Serial ukazuje jak śmiertelna diagnoza jaką postawiono White'owi, zwyczajnemu mężczyźnie z typowymi, codziennymi problemami zmienia go z łagodnego domatora w trzon narkotykowej branży.",
                poster_path: "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
              },
              {
                original_name: "The Wire",
                name: "Prawo ulicy",
                vote_average: 8.2,
                overview: "Grupa policjantów z Baltimore wypowiada wojnę narkotykową lokalnym bossom. ",
                poster_path: "/z66ZITnwFkt1Ktg5nKlmauMdW0B.jpg"
              },
              {
                original_name: "Sherlock",
                name: "Sherlock",
                vote_average: 8.2,
                poster_path: "/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg",
                overview: "Dr Watson (Martin Freeman) jest lekarzem i weteranem wojennym. Pewnego dnia poznaje Sherlocka Holmesa (Benedict Cumberbatch), który rozwiązuje zagadki kryminalne sposobem dedukcji. \"Sherlock\" to uwspółcześniona wersja przygód jednego z najsłynniejszych detektywów. Akcja toczy się w teraźniejszym Londynie.",
              },
              {
                original_name: "Firefly",
                name: "Firefly",
                vote_average: 8.2,
                poster_path: "/uoOyOpSaE7ZAxlwHWHSQirxnQhz.jpg",
                overview: "Kapitan Malcolm Reynolds wraz załogą statku Serenity przemierza galaktykę, przemycając ładunki lub przewożąc pasażerów. Sytuacja komplikuje się, gdy zabiera na pokład parę wyjętych spod prawa uciekinierów.",
              },
              {
                original_name: "The Sopranos",
                name: "Rodzina Soprano",
                vote_average: 8.2,
                poster_path: "/u0cLcBQITrYqfHsn06fxnQwtqiE.jpg",
                overview: "Tony Soprano, mąż i ojciec dwójki dzieci, a zarazem ważny członek mafii z New Jersey, cierpi na tajemnicze ataki paniki. Kiedy sytuacja zaczyna go przerastać, postanawia rozpocząć terapię u psychiatry.",
              },
              {
                original_name: "Fargo",
                name: "Fargo",
                vote_average: 8.2,
                overview: "Rok 2006, Minnesota. Do prowincjonalnego Bemidji przybywa tajemniczy mężczyzna, Lorne Malvo. Swoją brutalnością i bezwzględnością wpływa na mieszkańców miasta, w tym na udręczonego przez życie sprzedawcę ubezpieczeń, Lestera Nygaarda. ",
                poster_path: "/sskPK2HjkFaxam10eg0Hk1A3I2m.jpg"
              },
              {
                original_name: "Black Mirror",
                name: "Czarne lustro",
                vote_average: 8.2,
                overview: "Trzy historie osadzone w przyszłości, opowiedziane w trzech odcinkach. Każda z nich opowiada o innych przykrych konsekwencjach rozwoju naszej cywilizacji, pokazując w sposób karykaturalny do czego może dojść jeśli nic się nie zmieni. W każdej mamy do czynienia z różnym problemem społeczno-obyczajowym osadzonym w różnej futurystycznej perspektywie czasowej. W serialu zostaje poruszony między innymi problem przekraczania barier obyczajowych w imię sztuki, zgubnego wpływu nowych technologii na życie osobiste, czy podporządkowania życia regułom telewizji i portali społecznościowych, gdzie nic już nie jest prawdziwe. ",
                poster_path: "/vGrS1mzlSHQQdOcmqH1zlE2iViY.jpg"
              }
        ]
    }

    cutOverview = (overview) => {
        const stringLength = 100;
        let cutted = overview.substring(0, stringLength);
        for(let i = stringLength; i <= overview.length; i++) {
            if(overview[i] !== '.') {
                cutted += overview[i];
            } else {
                cutted += '.';
                break;
            }
        }
        return cutted;
    }

    render() {
        const topRated = this.state.topRated.map((item,i) => { 
            return (
              <div key={i} className={classes.Item} >
                <div className={classes.Overlay}>
                    <div className={classes.Description}>
                        <h2>{item.name}</h2>
                        <h3>{item.original_name}</h3>
                        <p>{this.cutOverview(item.overview)}</p>
                    </div>
                </div>
                <img src={['https://image.tmdb.org/t/p/original',item.poster_path].join('')} alt="" />
              </div>
            )
          });

        return (
            <div className={classes.Container}>
                <h1>Najwyżej oceniane seriale</h1>
                <div className={classes.Posters}>
                    {topRated}
                </div>
            </div>
        );
    }
}

export default TopRatedTv;