import React, { Component } from 'react';
import Carousel from '../../../hoc/PosterCarousel/PosterCarousel';

import classes from '../TopSection.css';

class MostPopularMovies extends Component {
    state = {
        mostPopular: [
          {
            id: 198663,
            title: "Więzień labiryntu",
            poster_path: "/l5ZGNU3KEKy9raSD5ZSRfWCAg8I.jpg",
            original_title: "The Maze Runner",
            overview: "Thriller science fiction, którego akcja toczy się w świecie dotkniętym wielkim kataklizmem. Thomas budzi się w windzie, która powoli jedzie w górę. Kiedy w końcu się zatrzymuje i otwierają właz, dowiaduje się, że trafił do Strefy zamieszkałej przez Streferów. To ogromna polana ogrodzona wysokim, betonowym murem. Chłopak niczego nie pamięta – kim jest, skąd pochodzi, jak się tam znalazł. Nie wie, kim są jego rodzice i jak ma na imię. ...",
          },
          {
            id: 245891,
            title: "John Wick",
            poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
            original_title: "John Wick",
            overview: "John Wick był najlepszym płatnym zabójcą w USA, ale dla ukochanej żony wycofał się z biznesu. Po jej śmierci nie dane mu będzie w spokoju przeżyć żałoby. Gdy syn rosyjskiego mafiosa odbierze mu ostatnią pamiątkę po ukochanej, zemsta będzie tylko kwestią czasu. Przestępczy świat na wieść o tym, że John Wick wrócił do gry, zamiera w przerażeniu, a rosyjski mafioso wydaje na niego wyrok śmierci. Już wkrótce miasto stanie w płomieniach...Były płatny morderca jest ścigany przez starego przyjaciela, który przyjął na niego zlecenie.",
          },
          {
            id: 346364,
            title: "To",
            poster_path: "/jDOMQ0fm9A97gy9aD9vF7MEKzJA.jpg",
            original_title: "It",
            overview: "Kiedy w mieście Derry w stanie Maine zaczynają znikać dzieci, grupa dzieciaków musi stawić czoła swoim największym lękom. Na ich drodze staje nikczemny klaun o imieniu Pennywise, który zapisał się na kartach historii jako morderca lubujący się w zadawaniu bólu. Film oparty jest na motywach niezwykle popularnej powieści Stephena Kinga pod tym samym tytułem, która przeraża czytelników od dziesięcioleci.",
          },
          {
            id: 8844,
            title: "Jumanji",
            poster_path: "/8wBKXZNod4frLZjAKSDuAcQ2dEU.jpg",
            original_title: "Jumanji",
            overview: "Kiedy młody Alan Parrish odkrył tajemniczą grę planszową, nie zdawał sobie sprawy z jej niewyobrażalnej mocy. Wszystko zmieniło się z chwilą, w której na oczach swojej koleżanki Sary został magicznie przeniesiony do dzikiej dżungli Jumanji! 26 lat później zostaje uwolniony z gry przez dwójkę niczego nie podejrzewających dzieciaków. Alan (Robin Williams) ponownie poznaje Sarah (Bonnie Hunt) i razem z Judy (Kirsten Dunst) oraz Peterem (Bradley Pierce), stara się przechytrzyć potężne moce gry w pomysłowej przygodzie, która łączy zapierające dech w piersiach efekty specjalne i zaczarowaną mozaikę komedii, magii i dreszczyku.",
          },
          {
            id: 354912,
            title: "Coco",
            poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
            original_title: "Coco",
            overview: "Film opowiada o historii małego chłopca - Miguela, który próbuje rozwiązać pewną tajemnicę rodzinną. Za sprawą nieoczekiwanych wydarzeń dochodzi do spotkania chłopca i rodziny, żywej jak i martwej.",
          },
          {
            id: 321612,
            title: "Piękna i Bestia",
            poster_path: "/kAqgbFYKZfzJ0NtsWs6l1vh407j.jpg",
            original_title: "Beauty and the Beast",
            overview: "Belle gotowa jest zamieszkać w zamku potwora, aby ratować ojca. Z czasem między dziewczyną a bestią zaczyna rodzić się uczucie.",
          },
          {
            id: 353486,
            title: "Jumanji: Przygoda w dżungli",
            poster_path: "/7kvKAqgU2xPai9gRyFn2rBiwNxW.jpg",
            original_title: "Jumanji: Welcome to the Jungle",
            overview: "Kiedy dzieciaki odkrywają starą konsolę gier wideo z grą \"Jumanji\", o której nigdy dotąd nie słyszały, natychmiast przenoszą się w świat niebezpiecznej dżungli. To właśnie w niej dzieje się akcja gry, a one stają się awatarami postaci, które wybrały: zapalony gracz Spencer staje się odważnym łowcą przygód (Dwayne Johnson), fan piłki Fridge zamienia się (według własnych słów) w Einsteina (Kevin Hart), Bethany – popularna dziewczyna z sąsiedztwa – staje się profesorem w średnim wieku (Jack Black), natomiast niepozorna Martha przybiera postać nieustraszonej wojowniczki (Karen Gillan). Wkrótce odkrywają, że w Jumanji chodzi nie tylko o grę, ale przede wszystkim o przetrwanie. Aby wygrać i powrócić do realnego świata, będą musieli wyruszyć w najbardziej niebezpieczną przygodę życia, odkrywając prawdę o sobie, albo pozostać w świecie gry na zawsze…",
          },
          {
            id: 284053,
            title: "Thor: Ragnarok",
            poster_path: "/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
            original_title: "Thor: Ragnarok",
            overview: "Thor zostaje uwięziony po drugiej stronie wszechświata. Osłabiony i pozbawiony młota musi znaleźć sposób, by powrócić do Asgardu i stawić czoła bezwzględnej i wszechpotężnej Heli oraz powstrzymać Ragnarok – \"zmierzch bogów\", zagładę świata i całej asgardzkiej cywilizacji. Przedtem jednak musi stanąć do gladiatorskiego pojedynku na śmierć i życie z byłym sprzymierzeńcem i członkiem drużyny Avengers — niesamowitym Hulkiem!  [opis dystrybutora kino]",
          },
          {
            id: 316029,
            title: "Król rozrywki",
            poster_path: "/6v9hkDkD5CfDRojVAjyVoRBJhrY.jpg",
            original_title: "The Greatest Showman",
            overview: "Oryginalny musical, który ukazuje narodziny amerykańskiego przemysłu rozrywkowego. Inspirowany losami legendarnego P.T. Barnuma film ukazuje historię wizjonera, gotowego na wszystko, by urzeczywistnić ideę olśniewającego widowiska, który stał się sensacją na miarę światową.",
          },
          {
            id: 347882,
            title: "Sztuczka",
            poster_path: "/wridRvGxDqGldhzAIh3IcZhHT5F.jpg",
            original_title: "Sleight",
            overview: "Młody uliczny magik musis zająć się młodszą siostrą po odejściu matki; wplątuje się w handel narkotykami w Los Angeles, aby utrzymać dach nad głową.",
          },
          {
            id: 406563,
            title: "Naznaczony: Ostatni klucz",
            poster_path: "/zRUZjHFsZggZprU6KetySrUZVE0.jpg",
            original_title: "Insidious: The Last Key",
            overview: "Ponownie spotkamy się z dr Elise Rainier, wybitną parapsycholożką, która zmierzy się z najbardziej osobistą i przerażającą historią w swej karierze – będzie musiała stawić czoła lękowi w swym rodzinnym domu.",
          },
          {
            id: 460793,
            title: "Kraina Lodu. Przygoda Olafa",
            poster_path: "/47pLZ1gr63WaciDfHCpmoiXJlVr.jpg",
            original_title: "Olaf's Frozen Adventure",
            overview: "Anna i Elsa postanowiły urządzić uroczystości świąteczne dla mieszkańców Arendelle. Gdy siostry zdają sobie sprawę, że nie mają rodzinnych tradycji, bałwan Olaf rusza im z pomocą.",
          },
          {
            id: 211672,
            title: "Minionki",
            poster_path: "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
            original_title: "Minions",
            overview: "Film zabierze nas w przeszłość, dzięki czemu poznamy historię Minionków - od zarania dziejów do czasu, gdy w ich życiu pojawił się Gru. Minionki zawsze potrzebowały złego przywódcy, służyły już T. Rexowi, Czyngis-chanowi, Napoleonowi, a nawet hrabiemu Drakuli, tyle tylko, że… wszystkich ich przypadkowo zgładziły. Teraz, kiedy nie mają komu służyć, są pogrążone w rozpaczy. Minionki Kevin, Bob i Stuart desperacko poszukując zła, przemierzają cały świat. Po drodze detronizują królową Elżbietę II i wplątują się w najdziwniejsze przygody. Na Florydzie, podczas tajemnej konwencji złoczyńców poznają Scarlett Overkill (w wersji oryginalnej głosu użyczyła jej Sandra Bullock), pierwszy w historii tak czarny kobiecy charakter. W niej cała nadzieja.",
          },
          {
            id: 343668,
            title: "Kingsman: Złoty krąg ",
            poster_path: "/yym9WGPJzMtBKQAXj4b5a1SsRuo.jpg",
            original_title: "Kingsman: The Golden Circle",
            overview: "Kontynuacja przeboju \"Kingsman: Tajne służby\", który zrewolucjonizował kino szpiegowskie i wprowadził na ekran agentów nowej generacji. Tym razem nasi bohaterowie stają w obliczu wyjątkowego wyzwania. Gdy ich kwatera zostaje zniszczona, a los świata zawisa na włosku, brytyjscy agenci odkrywają, że w Stanach Zjednoczonych istnieje sprzymierzona organizacja szpiegowska o równie długiej i bogatej historii. Przedstawiciele dwóch elitarnych organizacji muszą teraz zapomnieć o dzielących ich różnicach i wspólnie stawić czoło nieobliczalnemu wrogowi, który dąży do władzy nad światem. Gra idzie o wyjątkowo wysoką stawkę, ale dla Eggsy'ego nie ma nic trudnego...",
          },
          {
            id: 339403,
            title: "Baby Driver",
            poster_path: "/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
            original_title: "Baby Driver",
            overview: "Utalentowanego młodego kierowcę, który zarabia na życie udziałem w napadach, przez życie prowadzi muzyka. To ona pomaga mu być najlepszym w tym, co robi. Kiedy poznaje dziewczynę swych marzeń, postanawia porzucić przestępczą przeszłość i zacząć żyć normalnie. Zmuszony przez bossa mafijnego, dla którego pracuje, do udziału w z góry skazanym na niepowodzenie skoku, ryzykuje utratą wszystkiego, co dla niego najważniejsze – miłości, wolności i muzyki.",
          },
          {
            id: 399035,
            title: "Pasażer",
            poster_path: "/4hSwaP6F5vrs8T3nLftVMFurLag.jpg",
            original_title: "The Commuter",
            overview: "Dla agenta ubezpieczeniowego Michaela Woolricha każdy dzień wygląda tak samo – praca i powrót pociągiem do domu. Wszystko zmienia się, gdy w czasie jednej z podróży poznaje tajemniczą kobietę. Nieznajoma, która wydaje się wiedzieć o Michaelu dosłownie wszystko, zleca mu niezwykłe zadanie. Zanim pociąg dotrze do celu, mężczyzna ma zlokalizować i wskazać osobę, która tego dnia nie powinna się w nim znajdować. Jeśli tego nie zrobi, ucierpi zarówno on sam, jego rodzina, jak i pozostali współpasażerowie. Nie mając wyboru, Michael postanawia rozwiązać zagadkę. Z każdą minutą i przebytym kilometrem stawka rośnie, a mężczyzna przekonuje się, że stał się pionkiem w szalenie niebezpiecznej intrydze.",
          },
          {
            id: 335984,
            title: "Blade Runner 2049",
            poster_path: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
            original_title: "Blade Runner 2049",
            overview: "Akcja filmu rozgrywa się 30 lat po wydarzeniach z pierwszego Blade Runnera (1982). Oficer policji Los Angeles, niejaki K, trafia na ukrywaną przez lata informację, która może pogrążyć resztki społeczeństwa w chaosie. Jego odkrycie prowadzi go do poszukiwań Ricka Deckarda, byłego łowcy androidów, który zaginął 30 lat temu.",
          },
          {
            id: 209112,
            title: "Batman vs. Superman: Świt sprawiedliwości",
            poster_path: "/7pDic6DtySgBcwabpeMlOzDlcHG.jpg",
            original_title: "Batman v Superman: Dawn of Justice",
            overview: "W obawie przed poczynaniami nieposkromionego superbohatera o boskich rysach i zdolnościach, najznamienitszy obywatel Gotham City, a zarazem zaciekły strażnik porządku, staje do walki z otaczanym czcią współczesnym wybawcą Metropolis, podczas gdy świat usiłuje ustalić, jakiego bohatera naprawdę potrzebuje. Wobec konfliktu, który rozgorzał między Batmanem i Supermanem, na horyzoncie szybko pojawia się nowy wróg, stawiając ludzkość w obliczu śmiertelnego niebezpieczeństwa, z jakim jeszcze nigdy nie musiała się mierzyć. [opis dystrybutora]",
          },
          {
            id: 181808,
            title: "Gwiezdne wojny: Część VIII - Ostatni Jedi",
            poster_path: "/gW3SSNKtldFHtY28pFDFunngJH3.jpg",
            original_title: "Star Wars: The Last Jedi",
            overview: "Rey, którą poznaliśmy w filmie Gwiezdne wojny: Przebudzenie mocy (2015) oraz Finn, Poe i Luke Skywalker kontynuują swoją wielką podróż w kolejnej odsłonie gwiezdnej sagi.",
          },
          {
            id: 446354,
            title: "Czwarta władza",
            poster_path: "/uEpU98NPVTkJmxXB6tbapOj6TxP.jpg",
            original_title: "The Post",
            overview: "Dwoje wydawców dziennika \"The Washington Post\" staje na czele bezprecedensowego starcia amerykańskiej prasy z najwyższymi władzami, walcząc o prawo do ujawnienia szokujących tajemnic, przez cztery dekady ukrywanych przez amerykański rząd.",
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
                        <h2>{item.title}</h2>
                        <h3>{item.original_title}</h3>
                        <p>{this.cutOverview(item.overview)}</p>
                    </div>
                </div>
                <img src={['https://image.tmdb.org/t/p/original',item.poster_path].join('')} alt="" />
              </div>
            )
          });

        return (
            <div className={classes.Container}>
                <h1>Najbardziej popularne filmy</h1>
                <div className={classes.Posters}>
                    <Carousel>
                        {mostPopular}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default MostPopularMovies;