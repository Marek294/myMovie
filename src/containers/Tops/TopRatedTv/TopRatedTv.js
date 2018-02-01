import React, { Component } from 'react';
import Carousel from '../../../hoc/PosterCarousel/PosterCarousel';

import classes from '../TopSection.css';

class TopRatedTv extends Component {
    state = {
        topRated: [
            {
                id: 60625,
                original_name: "Rick and Morty",
                name: " Rick i Morty",
                vote_average: 8.5,
                overview: "Głównymi bohaterami są dziadek i wnuczek. Dziadek, Rick, to szalony wynalazca, który podróżuje przez odległe światy z taką swobodą, z jaką inni dziadkowie spacerują po parku. Wnuczek, Morty, to zwykły dzieciak, zakochany w koleżance z klasy i opuszczający coraz więcej lekcji z powodu przygód, które przeżywa z dziadkiem.",
                poster_path: "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
              },
              {
                id: 66732,
                original_name: "Stranger Things",
                name: "Stranger Things",
                vote_average: 8.4,
                overview: "Akcja serialu rozgrywa się w 1983 roku w stanie Indiana, USA. W spokojnej,  podmiejskiej dzielnicy ginie chłopiec. Przyjaciele, rodzina i policja  zaczynają poszukiwania, jednak zaginięcie chłopca okazuje się być  początkiem złożonej historii, której meandry są coraz bardziej zawiłe: w  miasteczku nagle pojawia się dziwna dziewczynka niewiadomego  pochodzenia, a trop śledztwa prowadzi do odkrycia tajnych eksperymentów  rządowych.",
                poster_path: "/esKFbCWAGyUUNshT5HE5BIpvbcL.jpg"
              },
              {
                id: 1396,
                original_name: "Breaking Bad",
                name: "Breaking Bad",
                vote_average: 8.3,
                overview: "Głównym bohaterem \"Breaking Bad\" jest Walter White (Bryan Cranston), nauczyciel chemii mieszkający w Nowym Meksyku wraz z żoną (Anna Gunn) oraz nastoletnim synem (RJ Mitte) cierpiącym na porażenie mózgowe. Kiedy u Waltera zostaje zdiagnozowany rak w trzecim stadium, lekarze rokują, że pozostały mu dwa lata życia. Dzięki tym prognozom Walter wyzbywa się wszelkich lęków i pragnąc zabezpieczyć swoją rodzinę finansowo decyduje się wkroczyć do niebezpiecznego świata narkotyków i zbrodni. Serial ukazuje jak śmiertelna diagnoza jaką postawiono White'owi, zwyczajnemu mężczyźnie z typowymi, codziennymi problemami zmienia go z łagodnego domatora w trzon narkotykowej branży.",
                poster_path: "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
              },
              {
                id: 1438,
                original_name: "The Wire",
                name: "Prawo ulicy",
                vote_average: 8.2,
                overview: "Grupa policjantów z Baltimore wypowiada wojnę narkotykową lokalnym bossom. ",
                poster_path: "/z66ZITnwFkt1Ktg5nKlmauMdW0B.jpg"
              },
              {
                id: 19885,
                original_name: "Sherlock",
                name: "Sherlock",
                vote_average: 8.2,
                poster_path: "/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg",
                overview: "Dr Watson (Martin Freeman) jest lekarzem i weteranem wojennym. Pewnego dnia poznaje Sherlocka Holmesa (Benedict Cumberbatch), który rozwiązuje zagadki kryminalne sposobem dedukcji. \"Sherlock\" to uwspółcześniona wersja przygód jednego z najsłynniejszych detektywów. Akcja toczy się w teraźniejszym Londynie.",
              },
              {
                id: 1437,
                original_name: "Firefly",
                name: "Firefly",
                vote_average: 8.2,
                poster_path: "/uoOyOpSaE7ZAxlwHWHSQirxnQhz.jpg",
                overview: "Kapitan Malcolm Reynolds wraz załogą statku Serenity przemierza galaktykę, przemycając ładunki lub przewożąc pasażerów. Sytuacja komplikuje się, gdy zabiera na pokład parę wyjętych spod prawa uciekinierów.",
              },
              {
                id: 1398,
                original_name: "The Sopranos",
                name: "Rodzina Soprano",
                vote_average: 8.2,
                poster_path: "/u0cLcBQITrYqfHsn06fxnQwtqiE.jpg",
                overview: "Tony Soprano, mąż i ojciec dwójki dzieci, a zarazem ważny członek mafii z New Jersey, cierpi na tajemnicze ataki paniki. Kiedy sytuacja zaczyna go przerastać, postanawia rozpocząć terapię u psychiatry.",
              },
              {
                id: 60622,
                original_name: "Fargo",
                name: "Fargo",
                vote_average: 8.2,
                overview: "Rok 2006, Minnesota. Do prowincjonalnego Bemidji przybywa tajemniczy mężczyzna, Lorne Malvo. Swoją brutalnością i bezwzględnością wpływa na mieszkańców miasta, w tym na udręczonego przez życie sprzedawcę ubezpieczeń, Lestera Nygaarda. ",
                poster_path: "/sskPK2HjkFaxam10eg0Hk1A3I2m.jpg"
              },
              {
                id: 42009,
                original_name: "Black Mirror",
                name: "Czarne lustro",
                vote_average: 8.2,
                overview: "Trzy historie osadzone w przyszłości, opowiedziane w trzech odcinkach. Każda z nich opowiada o innych przykrych konsekwencjach rozwoju naszej cywilizacji, pokazując w sposób karykaturalny do czego może dojść jeśli nic się nie zmieni. W każdej mamy do czynienia z różnym problemem społeczno-obyczajowym osadzonym w różnej futurystycznej perspektywie czasowej. W serialu zostaje poruszony między innymi problem przekraczania barier obyczajowych w imię sztuki, zgubnego wpływu nowych technologii na życie osobiste, czy podporządkowania życia regułom telewizji i portali społecznościowych, gdzie nic już nie jest prawdziwe. ",
                poster_path: "/vGrS1mzlSHQQdOcmqH1zlE2iViY.jpg"
              },
              {
                id: 63247,
                original_name: "Westworld",
                name: "Westworld",
                vote_average: 8.1,
                overview: "Serial w doborowej obsadzie i niesamowitymi efektami specjalnymi jakie stały się znakiem rozpoznawczym wszystkich produkcji HBO. Innowacyjny park rozrywki o niewyobrażalnej skali, gdzie inteligentne roboty odgrywają role ludzi żyjących w okresie, gdy zachów USA pozostawał dziki i nieokiełznany. Bogacze płacą niewiarygodne sumy by móc wcielić się w role nieustraszonych pionierów, cowboyów czy indian. Ale świat w którym wszystko musi chodzić jak w zegarku jest narażony na usterki i wystarczy jeden błąd, by maszyny z pokornych słóg stały się bezlitosnymi rebeliantami.",
                poster_path: "/x2WKIbiwhLoWgLFbT2I0Gwq8U1J.jpg"
              },
              {
                id: 1399,
                original_name: "Game of Thrones",
                name: "Gra o Tron",
                vote_average: 8.1,
                poster_path: "/hDd5Zd9VMOqBeHa2agbnHZ98WWr.jpg",
                overview: "Siedem rodzin szlacheckich walczy o panowanie nad ziemiami krainy Westeros. Polityczne i seksualne intrygi są na porządku dziennym. Pierwszorzędne role wiodą rodziny: Stark, Lannister i Baratheon. Robert Baratheon, król Westeros, prosi swojego starego przyjaciela, Eddarda Starka, aby służył jako jego główny doradca. Eddard, podejrzewając, że jego poprzednik na tym stanowisku został zamordowany, przyjmuje propozycję, aby dogłębnie zbadać sprawę. Okazuje się, że przejęcie tronu planuje kilka rodzin. Lannisterowie, familia królowej, staje się podejrzana o podstępne knucie spisku. Po drugiej stronie morza, pozbawieni władzy ostatni przedstawiciele poprzednio rządzącego rodu, Targaryenów, również planują odzyskać kontrolę nad królestwem. Narastający konflikt pomiędzy rodzinami, do którego włączają się również inne rody, prowadzi do wojny. W międzyczasie na dalekiej północy budzi się starodawne zło. W chaosie pełnym walk i konfliktów tylko grupa wyrzutków zwana Nocną Strażą stoi pomiędzy królestwem ludzi, a horrorem kryjącym się poza nim.",
              },
              {
                id: 1425,
                original_name: "House of Cards",
                name: "House of Cards",
                vote_average: 8.1,
                overview: "Po zwycięskich dla swojej partii wyborach prezydenckich senator Francis Underwood (Kevin Spacey) zostaje pozbawiony obiecanego mu wcześniej stanowiska Sekretarza Stanu. Underwood, wykorzystując manipulacje oraz intrygi, zamierza zemścić się na prezydencie i odebrać mu urząd. Postanawia posłużyć się również dziennikarką Zoe Barnes (Kate Mara).",
                poster_path: "/tpj8wyeAVgDakXchERIzYUuwln9.jpg"
              },
              {
                id: 4087,
                original_name: "The X-Files",
                name: "Z Archiwum X",
                vote_average: 8.1,
                poster_path: "/yYTUUa4hrpOUyt5MeJDJsuVFZY.jpg",
                overview: "Serial opowiada o nietypowej parze agentów FBI. Fox Mulder (David Duchovny) i Dana Scully (Gillian Anderson) prowadzą tytułowe Archiwum X, komórkę Federalnego Biura Śledczego, do której trafiają wszystkie sprawy nie dające się wyjaśnić na drodze konwencjonalnego rozumowania. Mulder głęboko wierzy w istnienie istot pozaziemskich i innych niewytłumaczalnych zjawisk, będących przedmiotami ich śledztw. Praca w Archiwum X jest dla niego próbą wyjaśnienia zagadki zaginięcia swojej siostry, która – jak twierdzi Mulder – została porwana przez obcych. Scully natomiast, jako naukowiec, jest bardzo sceptycznie nastawiona do wszelkich badanych przez nich spraw, choć w toku wydarzeń sama także zaczyna wierzyć w paranormalne zjawiska. Z czasem do Muldera i Scully dołączają agenci John Doggett (Robert Patrick) i Monica Reyes (Annabeth Gish), tworząc drugi duet pracowników Archiwum X.",
              },
              {
                id: 1408,
                original_name: "House",
                name: "Dr House",
                vote_average: 8.1,
                overview: "Fabuła skupia się na osobie Gregory'ego House'a, szalonego, genialnego lekarza, kierującego zespołem diagnostycznym w Szpitalu Klinicznym Princeton-Plainsboro w New Jersey.",
                poster_path: "/pzAtg9rD4ybxqmzr4jqtnQs2qOF.jpg"
              },
              {
                id: 46648,
                original_name: "True Detective",
                name: "Detektyw",
                vote_average: 8.1,
                overview: "\"Detektyw\" to nowy serial HBO, którego głównymi bohaterami są Martin Hart (Woody Harrelson) i Rust Cohle (Matthew McConaughey), dwaj detektywi i byli partnerzy, którzy w połowie lat 90. pracowali w wydziale kryminalnym w Luizjanie. W 2012 roku policjanci wracają do najsłynniejszej z prowadzonych przez nich spraw - dziwacznego rytualnego morderstwo z 1995 roku. Opowieści detektywów o śledztwie, otwierają niewyleczone rany i zmuszają mężczyzn do powrotu do świata, który dawno zostawili za sobą.",
                poster_path: "/qAGXloFpjKEzYUIK3cjBSuVtpBw.jpg"
              },
              {
                id: 60059,
                original_name: "Better Call Saul",
                name: "Zadzwoń do Saula",
                vote_average: 8.1,
                overview: "Pechowy prawnik robi wszystko, by zaistnieć na sądowej scenie w Albuquerque.",
                poster_path: "/b6tpspJMOauCQqud0KOcwNSq3F3.jpg"
              },
              {
                id: 615,
                original_name: "Futurama",
                name: "Futurama",
                vote_average: 8.1,
                overview: "Philip J. Fry przez przypadek hibernuje się i budzi w odległej przyszłości, gdzie poznaje krewnego, profesora Hubert J. Farnswortha, który postanawia zatrudnić chłopaka jako kuriera.",
                poster_path: "/iN0LOeE2JnJpIy4jF7imUjO6jwn.jpg"
              },
              {
                id: 1705,
                original_name: "Fringe",
                name: "Fringe: Na granicy światów",
                vote_average: 8,
                poster_path: "/42At9ZbMmimCUsWIwFbJMSiI2QL.jpg",
                overview: "Agentka FBI Olivia Dunham wraz z genialnym naukowcem Walterem Bishopem i jego synem Peterem tworzą zespół prowadzący śledztwa dotyczące serii zagadkowych zdarzeń.",
              },
              {
                id: 1920,
                original_name: "Twin Peaks",
                name: "Miasteczko Twin Peaks",
                vote_average: 8,
                poster_path: "/6W6zWBAay6XVBgJsOu6c2mlFZ8l.jpg",
                overview: "W sennym i spokojnym miasteczku zostaje odnalezione ciało uczennicy, Laury Palmer.",
              },
              {
                id: 1405,
                original_name: "Dexter",
                name: "Dexter",
                vote_average: 8,
                overview: "Dexter prowadzi podwójne życie. Za dnia jest cenionym specjalistą ds. krwi w departamencie policji, a nocą zabija złoczyńców, którzy wymykają się organom sprawiedliwości. ",
                poster_path: "/bvvg43Y8ht4cm4El9LOEoqNDVxE.jpg"
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
                    <Carousel>
                        {topRated}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default TopRatedTv;