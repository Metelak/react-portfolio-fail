import React from 'react';

function Navigation(props) {
  const {
    pages=[],
    setCurrentPage, currentPage,
  }=props
  return (
    <nav>
      <ul className="flex-row">
        {pages.map((Page) =>(
          <li
          className={`mx-5 ${currentPage.name === Page.name && 'navActive'}`}
          key={Page.name}>
            <span
            onClick={() => setCurrentPage(Page)}>
              
            </span>
          </li>
        ))}
      </ul>
      <h1 id="about-me">About Me</h1>
    </nav>
  );
}

export default Navigation;