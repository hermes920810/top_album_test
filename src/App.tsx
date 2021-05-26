import React, { useState } from 'react';
import { Content, Header } from "./components";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import {
    Albums as AlbumsScene, 
    Songs as SongsScene,
    Favorites as FavoritesScene
} from "./scenes";

function App() {
  iconLibrary.add(faHeart, faSearch);
  const [activeTab, setActiveTab] = useState('1');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropToggle = () => setDropdownOpen(prevState => !prevState);

  const toggle = (tab:any) => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <Router>
      <Header>
        <Header.AlignLeft>
            {/* <Link to={Routes.ALBUMS.use()} onClick={() => { toggle('1'); }} className="ml-5">LOGO</Link> */}
            <div className="searchGroup">
              <FontAwesomeIcon icon="search" className="mr-2" style={{color: '#FFFFFF', transform: 'scaleX(-1)'}} />
              <input className="searchInput" />
              <Dropdown isOpen={dropdownOpen} toggle={dropToggle} className="ml-2">
                <DropdownToggle caret style={{background: 'transparent', border: 'none'}}>
                  Category
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          
        </Header.AlignLeft>
        <Header.AlignRight>
          <div className="d-flex">
            <Link to={Routes.ALBUMS.use()} className={ activeTab === '1' ? 'z99' : 'z95' }>
              <div
                className={ activeTab === '1' ? 'active-nav-item' : 'nav-item' }
                onClick={() => { toggle('1'); }}
              >
                Albums
              </div>
            </Link>
            <Link to={Routes.SONGS.use()} className={ activeTab === '2' ? 'z99' : 'z94' }>
              <div
                className={ activeTab === '2' ? 'active-nav-item' : 'middle-nav-item' }
                onClick={() => { toggle('2'); }}
              >
                Songs
              </div>
            </Link>
            <Link to={Routes.FAVORITE.use()} className={ activeTab === '3' ? 'z99' : 'z90' }>
              <div
                className={ activeTab === '3' ? 'active-last-nav-item' : 'last-nav-item' }
                onClick={() => { toggle('3'); }}
              >
                <FontAwesomeIcon icon="heart" style={{color: 'red'}} /> Favorites
              </div>
            </Link>
          </div>
        </Header.AlignRight>
      </Header>
      <Content>
        <Switch>
          <Route path={Routes.ALBUMS.route} exact component={AlbumsScene} />
          <Route path={Routes.SONGS.route} component={SongsScene} />
          <Route path={Routes.FAVORITE.route} component={FavoritesScene} />
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
