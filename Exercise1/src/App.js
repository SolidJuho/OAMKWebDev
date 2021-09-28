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

  return (
    <div className="bg">
      <Header />
      <div className="notification">
        {
          newsNotificationData.map(element=><HotNotification data ={element}/>)
        }
                    
      </div>
      <section className="content">
        <section className="main"><MainSection /></section>
        <aside className="aside"> <SideSection /></aside>
        
      </section>
    </div>
  );
}

export default App;
