import React, { Component } from 'react';
import Carousel from '../../../hoc/PosterCarousel/PosterCarousel';

import classes from '../TopSection.css';

class MostPopularTv extends Component {
    state = {
        mostPopular: [
          {
            id: 1418,
            original_name: "The Big Bang Theory",
            name: "Teoria wielkiego podrywu",
            overview: "Bohaterami są dwaj geniusze o nieco dziwnych poglądach. Leonard i Sheldon potrafią rozszczepić atom, jednak nie wiedzą, jak postępować z kobietami i nie mają pojęcia o życiowych realiach. Kiedy pewnego dnia w ich mieszkaniu zjawia się piękna dziewczyna, postanawiają porzucić dotychczasowy styl życia i poszerzyć horyzonty.",
            poster_path: "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
          },
          {
            id: 60735,
            original_name: "The Flash",
            name: "DC: Flash",
            overview: "Młody naukowiec w wyniku eksplozji laboratorium i porażenia piorunem zostaje obdarzony niesamowitą szybkością, którą wykorzystuje do walki ze złem.",
            poster_path: "/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg"
          },
          {
            id: 67744,
            original_name: "Mindhunter",
            name: "Mindhunter",
            overview: "Agent elitarnej jednostki kryminalnej FBI opracowuje techniki profilowania, ścigając seryjnych morderców i gwałcicieli.",
            poster_path: "/zVuc3Sfs6gyJm6M6Iq52jqdavw4.jpg"
          },
          {
            id: 7859,
            original_name: "El Rostro de Analía",
            name: "El Rostro de Analía",
            overview: "",
            poster_path: "/mQJmZpHjKTsqt64PPGucObvU1gy.jpg"
          },
          {
            id: 1622,
            original_name: "Supernatural",
            name: "Nie z tego świata",
            overview: "Sam Winchester (Jared Padalecki) dorastał polując na takie właśnie, przerażające rzeczy. Jednak to już przeszłość. Teraz chce studiować prawo, żyć spokojnie i normalnie. I tak jest do chwili, kiedy jego starszy brat Dean (Jensen Ackles) zjawia się z niepokojącymi wiadomościami: ich ojciec, człowiek, który od 22 lat polował na zło, zniknął. Teraz, aby go odszukać, bracia muszą zapolować na to, na co on polował... a Sam będzie zmuszony powrócić do życia, które miał nadzieję, na zawsze zostawił za sobą.",
            poster_path: "/3iFm6Kz7iYoFaEcj4fLyZHAmTQA.jpg"
          },
          {
            id: 1412,
            original_name: "Arrow",
            name: "DC: Arrow",
            overview: "Multimilioner Oliver Queen (Stephen Amell) pięć lat temu został uznany za zmarłego w wyniku katastrofy morskiej. Jednak niedawno został przypadkiem odnaleziony na bezludnej wyspie. Powraca do cywilizacji zupełnie odmieniony, przestał być wywołującym skandale celebrytą. Dodatkowo posiadł niezwykłe umiejętności, które pomagają mu w walce. Teraz chce zaprowadzić porządek w skorumpowanym mieście jako Green Arrow - łucznik w zielonym w kapturze.",
            poster_path: "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
          },
          {
            id: 71446,
            original_name: "La casa de papel",
            name: "La casa de papel",
            overview: "",
            poster_path: "/9LLuGMRJaWUJGHIEyeY3NkibpWV.jpg"
          },
          {
            id: 1402,
            original_name: "The Walking Dead",
            name: "Żywe trupy",
            overview: "Serial opowiada o czasie następującym po pandemicznej apokalipsie, po której świat opanowały zombie. Szeryf Rick Grimes (Andrew Lincoln) podróżuje wraz z rodziną i z garstką ocalałych, w bezustannym poszukiwaniu bezpiecznego schronienia. Ciągła presja oraz codzienne zmagania się z zagrożeniem i śmiercią zbierają krwawe żniwo, popychając wielu ku otchłani najgłębszego ludzkiego okrucieństwa. W trakcie walki o przeżycie swojej rodziny, Rick odkrywa, że wszechogarniający strach ocalałych może być dużo bardziej niebezpieczny niż przemierzające świat zombie.",
            poster_path: "/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg"
          },
          {
            id: 13964,
            original_name: "Ich bin ein Star – Holt mich hier raus!",
            name: "Ich bin ein Star – Holt mich hier raus!",
            overview: "",
            poster_path: "/bomSN4PrntEEvxGrEGZ8czYzcvq.jpg"
          },
          {
            id: 456,
            original_name: "The Simpsons",
            name: "Simpsonowie",
            overview: "Marge, Homer, Bart, Lisa i Maggie Simpsonowie mieszkają na przedmieściu Springfield, przeciętnego amerykańskiego miasteczka. Ich przygody jednak do przeciętnych nie należą...",
            poster_path: "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
          },
          {
            id: 1416,
            original_name: "Grey's Anatomy",
            name: "Chirurdzy",
            overview: "Serial opowiada o perypetiach lekarzy i stażystów ze szpitala Seattle Grace. Ukazuje zarówno ich życie zawodowe, jak i prywatne.",
            poster_path: "/m4J3oK2Zh61Pg8NxX3zanW4joau.jpg"
          },
          {
            id: 1403,
            original_name: "Marvel's Agents of S.H.I.E.L.D.",
            name: "Marvel: Agenci T.A.R.C.Z.Y.",
            poster_path: "/xjm6uVktPuKXNILwjLXwVG5d5BU.jpg",
            overview: "Agent Phil Coulson (Clark Gregg) zbiera grupę najlepiej wykwalifikowanych pracowników agencji S.H.I.E.L.D., organu ścigania zajmującego się obroną świata przed istotami o nadprzyrodzonych mocach, aby wykonywać zadania ściśle tajne, które bezpośrednio zagrażają życiu cywilów. W skład zespołu wchodzi: Grant Ward (Brett Dalton), wysoko wyszkolony agent do pracy w terenie; Melinda May (Ming-Na Wen), znająca sztuki walki ekspertka ds. transportu; Leo Fitz (Iain De Caestecker), błyskotliwy inżynier oraz Jemma Simmons (Elizabeth Henstridge), genialna biochemiczka. Do drużyny dołącza także hakerka, Skye (Chloe Bennet), która do tej pory była zagorzałą przeciwniczką działalności S.H.I.E.L.D.",
          },
          {
            id: 1434,
            original_name: "Family Guy",
            name: "Głowa rodziny",
            overview: "Perypetie familii Griffinów, której głową rodziny jest zwariowany Peter. ",
            poster_path: "/n3UBzIx28m3FpC2EDwVJIjvPxnl.jpg"
          },
          {
            id: 44217,
            original_name: "Vikings",
            name: "Wikingowie",
            overview: "\"Vikings\" opowiada historię Ragnara Lothbroka oraz jego braci i rodziny. Serial ukazuje jak Ragnar staje się królem wikińskich plemion. Poza byciem nieustraszonym wojownikiem, Ragnar jest ucieleśnieniem nordyckiej tradycji i oddania się bogom. Legenda mówi, że jest on bezpośrednim potomkiem Odyna, boga wojny i wojowników.",
            poster_path: "/mBDlsOhNOV1MkNii81aT14EYQ4S.jpg"
          },
          {
            id: 1396,
            original_name: "Breaking Bad",
            name: "Breaking Bad",
            overview: "Głównym bohaterem \"Breaking Bad\" jest Walter White (Bryan Cranston), nauczyciel chemii mieszkający w Nowym Meksyku wraz z żoną (Anna Gunn) oraz nastoletnim synem (RJ Mitte) cierpiącym na porażenie mózgowe. Kiedy u Waltera zostaje zdiagnozowany rak w trzecim stadium, lekarze rokują, że pozostały mu dwa lata życia. Dzięki tym prognozom Walter wyzbywa się wszelkich lęków i pragnąc zabezpieczyć swoją rodzinę finansowo decyduje się wkroczyć do niebezpiecznego świata narkotyków i zbrodni. Serial ukazuje jak śmiertelna diagnoza jaką postawiono White'owi, zwyczajnemu mężczyźnie z typowymi, codziennymi problemami zmienia go z łagodnego domatora w trzon narkotykowej branży.",
            poster_path: "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
          },
          {
            id: 61555,
            original_name: "The Missing",
            name: "The Missing",
            poster_path: "/w1FDeOGoFS1qsSRHlj2Jzp2P0e1.jpg",
            overview: "Fabuła opowiada o zdruzgotanym mężczyźnie - Tonym (James Nesbitt), którego syn został porwany przez nieznanych sprawców podczas rodzinnych wakacji we Francji. Główny bohater nie potrafi pogodzić się z faktem, że jego syn może już nie żyć, i postanawia go odszukać. Nie zdaje sobie sprawy, że poszukiwania trwać będą kilka lat i zniszczą życie nie tylko jego, ale również żony, Emily (Frances O'Connor). W poszukiwaniach Tony'emu pomaga detektyw Julien.",
          },
          {
            id: 57243,
            original_name: "Doctor Who",
            name: "Doktor Who",
            overview: "Rose Tyler pracuje w domu towarowym w Londynie. Prowadzi monotonne, przeciętne życie, do momentu, w którym manekiny sklepowe próbują ją zabić. Ratuje ją nieznajomy, który nazywa siebie Doktorem. Rose zaintrygowana nieznajomym bez namysłu podąża za Doktorem, którego zadaniem jest pokonanie obcych przed dokonaniem inwazji na Ziemię i zagładzie rasy ludzkiej. Podczas wspólnej podróży okazuje się, że Doktor jest ostatnim ze swego gatunku \"Władców Czasu\", który podróżuje w czasie i przestrzeni w statku nazywanym Tardis, walcząc ze złem tam gdzie je odnajduje. Rose podróżując z nim będzie świadkiem zagłady Ziemi pięć miliardów w przyszłości, spotka Charles'a Dickens'a w przeszłości i niezliczone ilości form życia, o których istnieniu nie przypuszczała. Tylko jedno jest pewne - to będzie podróż jej życia.",
            poster_path: "/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg"
          },
          {
            id: 75768,
            original_name: "Deus Salve o Rei",
            name: "Deus Salve o Rei",
            overview: "Następca tronu zakochany w plebeju. Niekonsekwentny książę, który myśli tylko o wykorzystanie królewskiego mecenatu. Ambitna księżniczka, zdolna do wszystkiego, by dostać to, czego chce.",
            poster_path: "/jwykQZcoTo3ZGyknTwB65qwhvaX.jpg"
          },
          {
            id: 34307,
            original_name: "Shameless",
            name: "Niepokorni",
            overview: "Serial przedstawia losy dysfunkcyjnej rodziny Franka Gallaghera, samotnego ojca szóstki dzieci. Podczas gdy on większość czasu spędza na piciu, dzieci uczą się zajmować same sobą. Producenci Shameless chcieli odróżnić serial od innych produkcji o amerykańskiej klasie robotniczej poprzez uwypuklenie tego, jak alkoholizm Franka wpływa na rodzinę. Twórca oryginału, Paul Abbott, stwierdził: „To nie jest Na imię mi Earl czy Roseanne. W tym serialu jest znacznie więcej ubóstwa”. Początkowo showrunner John Wells walczył o to, żeby akcja osadzona była w parku przyczep",
            poster_path: "/7eDvhKCu7jkkKQI37nwYWvXJTzl.jpg"
          },
          {
            id: 4087,
            original_name: "The X-Files",
            name: "Z Archiwum X",
            poster_path: "/yYTUUa4hrpOUyt5MeJDJsuVFZY.jpg",
            overview: "Serial opowiada o nietypowej parze agentów FBI. Fox Mulder (David Duchovny) i Dana Scully (Gillian Anderson) prowadzą tytułowe Archiwum X, komórkę Federalnego Biura Śledczego, do której trafiają wszystkie sprawy nie dające się wyjaśnić na drodze konwencjonalnego rozumowania. Mulder głęboko wierzy w istnienie istot pozaziemskich i innych niewytłumaczalnych zjawisk, będących przedmiotami ich śledztw. Praca w Archiwum X jest dla niego próbą wyjaśnienia zagadki zaginięcia swojej siostry, która – jak twierdzi Mulder – została porwana przez obcych. Scully natomiast, jako naukowiec, jest bardzo sceptycznie nastawiona do wszelkich badanych przez nich spraw, choć w toku wydarzeń sama także zaczyna wierzyć w paranormalne zjawiska. Z czasem do Muldera i Scully dołączają agenci John Doggett (Robert Patrick) i Monica Reyes (Annabeth Gish), tworząc drugi duet pracowników Archiwum X.",
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
        const mostPopular = this.state.mostPopular.map((item,i) => { 
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
                <h1>Najbardziej popularne seriale</h1>
                <div className={classes.Posters}>
                    <Carousel>
                        {mostPopular}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default MostPopularTv;