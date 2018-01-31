import React, { Component } from 'react';
import Carousel from '../../../hoc/PosterCarousel/Carousel';

import classes from '../TopSection.css';

class TopRatedMovies extends Component {
    state = {
        topRated: [
          {
            id: 278,
            vote_average: 8.5,
            title: "Skazani na Shawshank",
            poster_path: "/hII6Emej5jcEgY3iv48U0DtJqbT.jpg",
            original_title: "The Shawshank Redemption",
            overview: "Bankier z Nowej Anglii Andy Dufresne (Tim Robbins) został oskarżony o zabójstwo żony oraz jej kochanka i skazany na bezterminowy pobyt w ciężkim więzieniu Shawshank. Tylko dzięki pomocy czarnoskórego współwięźnia, Ellisa Boyda \"Reda\" Reddinga (Morgan Freeman) udaje mu się przeżyć w tym wyjątkowo ponurym miejscu. To od tego kryminalisty Andy uczy się też, że w brutalnym świecie więziennej przemocy do końca nie wolno tracić nadziei, bo tylko ona pozwala przetrwać.",
          },
          {
            id: 238,
            vote_average: 8.5,
            title: "Ojciec Chrzestny",
            poster_path: "/tZHlXyuVsRB2fUTlVM0p8g8bRaA.jpg",
            original_title: "The Godfather",
            overview: "Akcja filmu toczy się pod koniec II wojny światowej w Ameryce. Don Vito Corleone (Marlon Brando) jest głową jednej z pięciu mafijnych rodzin w Nowym Jorku. Wraz z pomocą synów Sonny'ego i Freda oraz Toma Hagena -który oferuje swoje usługi w zakresie prawnym - cieszą się uznaniem wśród wielu znanych i ważnych osobistości. Wszystko zaczyna się komplikować, gdy Don Vito odmawia współpracy w handlu narkotykami.",
          },
          {
            id: 424,
            vote_average: 8.4,
            title: "Lista Schindlera",
            poster_path: "/oe0g8CiK8YbC7ahgmFJQeekM6jl.jpg",
            original_title: "Schindler's List",
            overview: "Oskar Schindler jest poważanym niemieckim przemysłowcem, który podczas II wojny światowej jest właścicielem dużej fabryki, w której w nieludzkich warunkach pracują Żydzi. Widząc cierpienie tych ludzi zaczyna ratować ich przed śmiercią w obozach koncentracyjnych. Film oparty jest na prawdziwej historii Oskara Schindlera, który podczas wojny ocalił przed śmiercią około 1100 ludzkich istnień.",
          },
          {
            id: 244786,
            vote_average: 8.3,
            title: "Whiplash",
            poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
            original_title: "Whiplash",
            overview: "Andrew (Miles Teller) jest utalentowanym młodym perkusistą, uczniem konserwatorium muzycznego na Manhattanie. Chłopak marzy o wielkiej karierze. Aby zrealizować plany, postanawia dołączyć do szkolnej orkiestry jazzowej prowadzonej przez okrutnego nauczyciela Terence'a Fletchera (J.K. Simmons), który często wyładowuje swoje frustracje na uczniach. Pod kierunkiem bezwzględnego Fletchera, Andrew zaczyna dążyć do doskonałości za wszelką cenę - nawet własnego człowieczeństwa.",
          },
          {
            id: 680,
            vote_average: 8.3,
            title: "Pulp Fiction",
            poster_path: "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
            original_title: "Pulp Fiction",
            overview: "Płatni mordercy, Jules (Samuel L. Jackson) i Vincent (John Travolta), dostają zlecenie, by odzyskać z rąk przypadkowych rabusiów tajemniczą walizkę bossa mafii. Nie dość tego, Vincent dostaje kolejną robotę - na czas nieobecności gangstera w mieście ma zaopiekować się jego poszukującą wrażeń żoną Mią (Uma Thurman). Vincent i Jules niespodziewanie wpadają po uszy, gdy przypadkowo zabijają zakładnika. Kłopoty ma też podupadły bokser (Bruce Willis), który otrzymał dużą sumę za przegranie swojej walki. Walkę jednak wygrywa, a Los Angeles staje się od tej chwili dla niego za małe. Specjaliści od mokrej roboty będą mieli co robić...",
          },
          {
            id: 550,
            vote_average: 8.3,
            title: "Podziemny krąg",
            poster_path: "/r5m3KAA4b8MjgLskA47VKpa9Pcn.jpg",
            original_title: "Fight Club",
            overview: "Co ty możesz o sobie wiedzieć, jeśli nigdy nie walczyłeś? W tym niezwykłym, pełnym niespodziewanych zwrotów akcji i nie pozbawionym swoistego humoru filmie w reżyserii Davida Finchera (\"Siedem\") oryginalne i dynamiczne kreacje stworzyli Brad Pitt (\"Siedem\") i Edward Norton (\"Lęk pierwotny\"). Jack (Norton) cierpi na chroniczną bezsenność i jest całkowicie znudzony swym dotychczasowym życiem. Do czasu, gdy spotyka charyzmatycznego Tylera Durdena (Pitt) - sprzedawcę mydła o dość pokrętnej filozofii życia... Uważa on bowiem, że samo-doskonalenie jest dla słabeuszy, a to co rzeczywiście sprawia, że warto żyć to samo-destrukcja.",
          },
          {
            id: 13,
            vote_average: 8.3,
            title: "Forrest Gump",
            poster_path: "/toFaIsRMe24ugBb6K5hvf4bc2fi.jpg",
            original_title: "Forrest Gump",
            overview: "\"Forrest Gump\" to romantyczna historia dokumentalno-fabularna. W roli tytułowej Tom Hanks - nierozgarnięty młody człowiek o wielkim sercu i zdolności do odnajdywania się w największych wydarzeniach w historii USA, począwszy od swego dzieciństwa w latach 50-tych. Po tym, jak staje się gwiazdą footballu, odznaczonym bohaterem wojennym i odnoszącym sukcesy biznesmenem - Forrest zyskuje status osobistości, lecz nigdy nie rezygnuje z poszukiwania tego, co dla niego najważniejsze - miłości swej przyjaciółki, Jenny Curran. W całym swym życiu Forrest niezamierzenie znajduje się twarzą w twarz z wieloma legendarnymi postaciami lat 50-tych, 60-tych i 70-tych. Wiedzie go to od boiska piłki nożnej, poprzez dżungle Wietnamu, Waszyngton, Chiny, Nowy Jork, do Luizjany - i w wiele innych miejsc - relacjonuje w swych poruszających i wstrząsających opowieściach",
          },
          {
            id: 155,
            vote_average: 8.3,
            title: "Mroczny Rycerz",
            poster_path: "/yZI0t1F7FMFKSRGH0LL0cvsJEXb.jpg",
            original_title: "The Dark Knight",
            overview: "W nowym filmie Batman podejmuje szeroko zakrojoną walkę z przestępczością. Z pomocą porucznika Jima Gordona i prokuratora okręgowego Harveya Denta zabiera się za rozpracowywanie istniejących organizacji przestępczych nękających mieszkańców miasta. Współpraca przynosi efekty, ale bohaterowie wkrótce padną ofiarą chaosu, który rozpęta rosnący w siłę genialny przestępca, znany przerażonym mieszkańcom Gotham jako Joker.",
          },
          {
            id: 1891,
            vote_average: 8.2,
            title: "Gwiezdne wojny: Część V - Imperium kontratakuje",
            poster_path: "/8Ov4HtAbtPAY7cNZlk2yu7EVnKg.jpg",
            original_title: "The Empire Strikes Back",
            overview: "Kolejna część Gwiezdnej Sagi opowiada o wydarzeniach toczących się kilka lat po zniszczeniu pierwszej Gwiazdy Śmierci. Luke Skywalker (Mark Hamill) i pozostali Rebelianci uciekają po całej Galaktyce przed zakusami okrutnego Imperium. Bezpieczną ostoję znajdują na lodowej planecie Hoth. Jednak Imperium lokalizuje tę bazę. Rebelianci muszą uciekać. Luke udaje się do układu Dagobah, żeby spotkać się z Mistrzem Jedi, Yodą (Frank Oz) i pobrać od niego nauki. Natomiast Han (Harrison Ford), Leia (Carrie Fisher), Chewie (Peter Mayhew) i roboty uciekają na planetę Bespin, do dawnego przyjaciela Hana - Lando Calrissiana (Billy Dee Williams). Nie wiedzą, że wpadli w podstępnie uknutą przez Imperium pułapkę...",
          },
          {
            id: 122,
            vote_average: 8.2,
            title: "Władca Pierścieni: Powrót Króla",
            poster_path: "/hQASyLDbb5KesyzzJfWkFatYMhC.jpg",
            original_title: "The Lord of the Rings: The Return of the King",
            overview: "Nadszedł ten czas. Czas Frodo, który musi pokonać przebiegłego Golluma, przetrwać przerażający atak olbrzymiego pająka Sheloby i oprzeć się zniewalającej mocy Pierścienia, który niesie za sobą zniszczenie i zgubę. Czas Aragorna, który musi dobyć miecza swych przodków i przyjąć koronę swojego dziedzictwa. Czas potężnego starcia, które czarodziej Gandalf nazwał największą bitwą naszych czasów. Nadszedł też czas inspirującej kulminacji trylogii opartej na klasyce literatury autorstwa J.R.R. Tolkiena. Po raz trzeci film z kultowej trylogii zdobył nominację do Nagrody Akademii w kategorii Najlepszy film i po raz pierwszy ją otrzymał (oraz 10 innych). Król zasłużył na swoją koronę.",
          },
          {
            id: 77338,
            vote_average: 8.2,
            title: "Nietykalni",
            poster_path: "/sDcq1YBoqL9UrqEZWtANewEKcXW.jpg",
            original_title: "Intouchables",
            overview: "Ta historia zdarzyła się naprawdę. Sparaliżowany na skutek wypadku milioner zatrudnia do pomocy i opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia. Zderzenie dwóch skrajnie różnych światów daje początek szeregowi niewiarygodnych przygód i przyjaźni, która czyni ich... nietykalnymi.",
          },
          {
            id: 807,
            vote_average: 8.2,
            title: "Siedem",
            poster_path: "/jaEsuLfiRG9zUxj92CV2FINDyZm.jpg",
            original_title: "Se7en",
            overview: "Siedem. To liczba ofiar, których dosięgnie gniew jego wybrańca. To ilość sposobów odebrania życia, które on wybierze. To ilość dni tygodnia z życia deszczowej metropolii, które obejrzysz na ekranie, poznając zakamarki umysłu szaleńca. Ale czy na pewno jest on szalony, czy może szalone są tylko drogi, którymi prowadzi pozbawione empatii społeczeństwo do oświecenia?",
          },
          {
            id: 27205,
            vote_average: 8.1,
            title: "Incepcja",
            poster_path: "/bFl569dcxfhtWbsfW8zVhcVgwxv.jpg",
            original_title: "Inception",
            overview: "Dom Cobb (Leonardo DiCaprio) jest niezwykle sprawnym złodziejem, mistrzem w wydobywaniu wartościowych sekretów ukrytych głęboko w świadomości podczas fazy snu, kiedy umysł jest najbardziej wrażliwy. Wyjątkowe umiejętności Cobba uczyniły z niego ważnego gracza w świecie szpiegostwa przemysłowego, ale i najbardziej poszukiwanego zbiega, a za swoją pozycję zapłacił utratą wszystkiego, co kocha. Teraz Cobb otrzymuje szansę na odkupienie. Za sprawą jednego, ostatniego zadania może odzyskać stracone życie. Musi tylko wraz ze swym zespołem dokonać rzeczy niemożliwej: zamiast skraść myśl, zaszczepić ją w śpiącym umyśle. Jeśli im się to uda, dokonają zbrodni doskonałej. Jednak nawet najbardziej precyzyjne planowanie nie jest w stanie przygotować ich na spotkanie z niezwykłym przeciwnikiem, który potrafi przewidzieć każdy ich ruch. Wróg, którego tylko Cobb mógł się spodziewać.",
          },
          {
            id: 274,
            vote_average: 8.1,
            title: "Milczenie owiec",
            poster_path: "/7U1ZqcnxN2OxSMbpY5MEx9ifWcP.jpg",
            original_title: "The Silence of the Lambs",
            overview: "Psychopata porywa i morduje młode kobiety na środkowym zachodzie. Wierząc, że w ujęciu tego mordercy dopomoże tylko inny przestępca, F.B.I. wysyła Agentkę Clarice Starling Foster na wywiad z obłąkanym więźniem, który może dostarczyć psychologicznych przesłanek i tropów do kolejnych działań zabójcy. Więzień, psychiatra, Dr Hannibal Lecter Hopkins jest genialnym mordercą-ludożercą, który pomoże Agentce Starling, jeżeli ona będzie karmić jego chorą ciekawość detalami ze swojego skomplikowanego życia. Ta pokręcona relacja zmusza Starling nie tylko do konfrontacji z jej psychicznymi demonami, ale doprowadza ją również do spotkania twarzą w twarz z szalonym, ohydnym mordercą, wcieleniem zła tak mocnym, że nie będzie miała odwagi - ani siły - by go zatrzymać!",
          },
          {
            id: 157336,
            vote_average: 8.1,
            title: "Interstellar",
            poster_path: "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
            original_title: "Interstellar",
            overview: "Gdy okazuje się, że nasz czas na Ziemi dobiega końca, zespół odkrywców wyrusza na najważniejszą misję w dziejach ludzkości. Badacze podróżują poza granice naszej galaktyki, aby przekonać się, czy rasa ludzka ma szansę przetrwać wśród gwiazd. Dzięki nowo odkrytemu tunelowi czasoprzestrzennemu pokonują granice do tej pory przekraczające ludzkie możliwości podróżowania w innym wymiarze.",
          },
          {
            id: 120,
            vote_average: 8.1,
            title: "Władca Pierścieni: Drużyna Pierścienia",
            poster_path: "/ye2PKeXavujotScw8qe13pxkS4S.jpg",
            original_title: "The Lord of the Rings: The Fellowship of the Ring",
            overview: "Ekranizacja pierwszej części trylogii Tolkiena, \"Drużyna pierścienia\" zapoznaje widzów z czarodziejskim światem Śródziemia i jego mieszkańcami - ludźmi, hobbitami, elfami, krasnoludami, czarodziejami, trollami i orkami. W tej części trylogii młody i nieśmiały hobbit Frodo Baggins odziedzicza pierścień - Jedyny Pierścień, narzędzie władzy absolutnej, które pozwoliłoby Sauronowi, mrocznemu Władcy Mordoru, rządzić Śródziemiem i zniewolić zamieszkujące je ludy. Frodo, wraz z lojalną kompanią hobbitów, ludzi, czarodzieja, krasnoluda i elfa, musi zabrać Pierścień do Szczelin Zagłady, gdzie został kiedyś wykuty, i zniszczyć go raz na zawsze. Taka podróż oznacza zapuszczenie się głęboko do krainy Czarnego Władcy, gdzie gromadzi on armię orków. Drużyna musi walczyć nie tylko ze złem czającym się wokół, ale i z wewnętrznymi waśniami oraz niszczącym wpływem samego Pierścienia. Przyszłość świata i przeznaczenie drużyny są ze sobą splecione.",
          },
          {
            id: 11,
            vote_average: 8.1,
            title: "Gwiezdne wojny: Część IV - Nowa nadzieja",
            poster_path: "/sqdHaNm8j037G8sZKS5wagO9k8K.jpg",
            original_title: "Star Wars",
            overview: "Dawno, dawno temu w odległej galaktyce... Rycerze Jedi zostali wytępieni, a Imperium żelazną ręka sprawuje rządy nad całą galaktyką. Mała grupa Rebeliantów podejmuje walkę kradnąc tajne plany najpotężniejszej broni Imperium - tzw. Gwiazdy Śmierci. Najbardziej zaufany sługa Imperatora - Darth Vader musi odzyskać plany i odnaleźć ukrytą bazę buntowników. Księżniczka Leia - wzięta do niewoli przywódczyni Rebeliantów, wysyła sygnał z wezwaniem pomocy, który zostaje przechwycony przez zwykłego chłopaka z farmy - Luke'a Skywalkera. Wychodząc naprzeciw swemu przeznaczeniu, Luke podejmuje wyzwanie i rusza na ratunek Księżniczce chcąc pomóc Rebeliantom w obaleniu Imperium. W misji pomagają mu niezwykli sojusznicy - mądry Obi-Wan Kenobi, nieco arogancki gwiezdny awanturnik Han Solo i jego lojalny towarzysz Chewbacca a także dwa droidy R2-D2 i C-3PO.",
          },
          {
            id: 121,
            vote_average: 8.1,
            title: "Władca Pierścieni: Dwie Wieże",
            poster_path: "/z6H0WMzasmIh519qgzjhypHQg4U.jpg",
            original_title: "The Lord of the Rings: The Two Towers",
            overview: "Drużyna Pierścienia została rozbita. Z dziewięciu jej członków dwóch zginęło. Merry i Pippin zostają wzięci do niewoli przez orki. Aragorn, Legolas i Gimli ruszają w pościg, by ich odbić. Frodo chce za wszelką cenę wypełnić misję Powiernika Pierścienia, nawet sam. Wie też, że w pojedynkę łatwiej będzie mu umknąć przed ścigającymi na każdym kroku Drużynę Pierścienia szpiegami. W misji tej zdecydowanie pragnie wspierać go Sam, nawet wbrew jego życzeniu. Tak więc rozpoczyna się dużo trudniejszy etap misji Powiernika Pierścienia. Tymczasem Merry i Pippin, po wydostaniu się z niewoli, prowadzą armię pradawnych Entów na Isengardu, gdzie leży siedziba zdrajcy Sarumana. Aragorn, Legolas, Gimli i Gandalf Biały wspierają Rohan w bitwie o Rogaty Gród, mającej odeprzeć najazd Isengardu. Członkowie rozbitej Drużyny Pierścienia rozumieją, że tylko tym sposobem mogą wspomóc Powiernika Pierścienia w jego misji. Niestety wszystko wskazuje na to, że wojna z siłami Mordoru za chwilę się rozpocznie.",
          },
          {
            id: 105,
            vote_average: 8.1,
            title: "Powrót do przyszłości",
            poster_path: "/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg",
            original_title: "Back to the Future",
            overview: "Marty McFly (Michael J. Fox) jest typowym nastolatkiem, ale ma niezwykłego przyjaciela - Dr Emmetta Browna (Christopher Lloyd), który wynalazł wehikuł czasu. W nocy przed centrum handlowym Dr. Brown pokazuje swój wynalazek Martyemu. Wygląda on jak udoskonalony samochód, a działa na... pluton. Dr. Brown zwędził go Libijczykom, którzy chcieli, aby zrobił im bombę atomową. Podczas eksperymentu terroryści zabijają doktora. Marty cudem uchodzi z życiem, ale przenosi się do roku 1955. Szukając Dr. Browna z lat pięćdziesiątych natyka się na rodziców i zapobiega ich poznaniu. W wyniku tego może się nigdy nie urodzić...",
          },
          {
            id: 8587,
            vote_average: 8,
            title: "Król Lew",
            poster_path: "/nGArwXth0dOH8AUZuPCyBBJEWoF.jpg",
            original_title: "The Lion King",
            overview: "Król Lew to opowieść o Simbie lwiątku, dziedzicu Lwiej Krainy. Za sprawą knowań złego stryja Skazy, Simba musi opuścić rodzinne strony. Samotny i porzucony, trafia pod opiekę wesołych i beztroskich kompanów Timona i Pumby. Dorasta, wiodąc wraz z nimi radosne, pełne przygód życie, zapominając o odpowiedzialności i królewskim dziedzictwie. Przeznaczenie jednak daje o sobie znać. Simba przekonuje się, że nadszedł czas powrotu i objęcia we władanie Lwiej Krainy. Musi znaleźć w sobie dość odwagi, by przeciwstawić się złemu stryjowi Skazie, stoczyć z nim zaciekłą walkę i zająć należne mu w odwiecznym \"kręgu życia\" miejsce.",
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
                <h1>Najwyżej oceniane filmy</h1>
                <div className={classes.Posters}>
                    <Carousel>
                        {topRated}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default TopRatedMovies;