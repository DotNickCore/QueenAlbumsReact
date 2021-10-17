import './App.css';
import { Component } from 'react';
import CardList from './components/album-list/album-list'
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list_of_albums: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/albums')
    .then(response => response.json())
    .then(albums => this.setState({ list_of_albums: albums}))
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value})
  }

  render(){
    const { list_of_albums, searchField } = this.state;
    const filteredAlbums = list_of_albums.filter(album =>
      album.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Queen Albums</h1>
          <SearchBox  placeholder="Search"  handleChange={this.handleChange}/>
          <CardList albums={filteredAlbums}/>
          {/*
          { this.state.list_of_albums.map(album => (
              <h1 key={album.id}>{ album.name }</h1>
            ))}
          */} 
      </div>
    );
  }
}

export default App;
