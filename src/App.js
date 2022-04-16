
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {
  const [pages]=useState([
    {
      name:"about me"
    },
    {
      name:"portfolio"
    },
    {
      name:"contact"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navigation
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        ></Navigation>
      </ Header>
      <main>
        <Page
        currentPage={currentPage}
        ></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;