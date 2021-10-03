import MainSection from 'components/MainSection';
import SideSection from 'components/SideSection';
import React from 'react';
import './App.css';
import Header from './components/Header';
import HotNotification from './components/HotNotification';

function App() {

  const newsNotificationData=[
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisonsa 19 200 euroa'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Tutkija kertoo: Näin sota näkyy meissä edelleen'
    },
    {
      topic: 'MAINOS',
      body: 'Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!',
      isad:true
    }
  ]
  const mainTopics=[
    {
      type: 'Koronavirus',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: './topic.png'
    }
  ]

  const mostRead=[
    {
      type: 'Rikosepäilty',
      body: 'Nakki kioski ryöstettiin',
      index: 1
    },
    {
      type: 'HS Vantaa',
      body: 'Vantaalla asutaan',
      index: 2

    },
    {
      type: 'Oulu',
      body: 'Toripoliisilla tavataan',
      index: 3

    },
    {
      type: 'HS',
      body: 'Geneerinen HS artikkeli tähän',
      index: 4

    },
    {
      type: 'Sisäänkäynti',
      body: 'Näin mullistui vuonna 1796 rakennettu hirsilinna – Suomalainen huippuarkkitehti remontoi viisi vuotta sukutaloaan, ja lopputulos on jotain täysin poikkeuksellista',
      index: 5

    },{
      type: 'HS-analyysi',
      body: 'Daniel Craigin bodattu ja terapiaa kaipaava James Bond on aikamme kuva – Ministeri yritti saada kuvauksia myös Suomeen',
      index: 6

    },{
      type: 'Lapset',
      body: 'Tutkimus paljastaa: Lapsen tasolta katsottuna päiväkodit ovat muuttuneet, ja suunta on huolestuttava',
      index: 7

    },{
      type: 'HS Ympäristö',
      body: 'Yksi metaanivuoto lämmitti ilmastoa yhtä paljon kuin kaksi miljoonaa autoa vuodessa, eikä kukaan välittänyt – Ekokatastrofi on niin valtava, ettei mikään yksittäinen teko hetkauta meitä enää',
      index: 8

    },
  ]


  return (
    <div className="bg">
      <Header />
      <div className="notification">
        {
          newsNotificationData.map(element=><HotNotification data ={element}/>)
        }
                    
      </div>
      <section className="content">
        <section className="main"><MainSection maintopics={mainTopics} /></section>
        <section className="aside"> <SideSection mostread={mostRead}/></section>
        
      </section>
    </div>
  );
}

export default App;
