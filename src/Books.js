import React, { Component } from 'react';
import axios from 'axios';
import SearchBooks from './SearchBooks';

class Books extends Component {

    constructor(props){
        super(props)
        this.state = {
          books: [],
          store: []
        }
    }
    
    componentDidMount(){
        // axios.get('https://api.myjson.com/bins/tf31e')
        // .then(json => json.data.Search.map(result => (
        //   {
            
        //     cover: `${result.Poster}`,
        //     name: `${result.Title}`,
        //     year: `${result.Year}`,
          
        //   })))
        // .then(newData => this.setState({books: newData}))
        // .catch(error => alert(error))

        axios.get('https://s3.amazonaws.com/popular-movies/movies.json')
        .then(json => json.data.map(result => (
          {
            cover: `${result.poster_url}`,
            name: `${result.title}`
          })))
        .then(newData => this.setState({books: newData, store: newData}))
        .catch(error => alert(error))
    }

    filterNames(e){
        this.setState({books: this.state.store.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
    }

    render() {
        const {books} = this.state
        return (
            <React.Fragment>

                <div>
                    <h4 className="title-desc">Books Recommended</h4>
                </div>

                {/* <SearchBooks searchBooksFunc={(e) => this.filterNames(e)}/> */}
                
                <div className="flex gallery">
                
                    {books.map(
                        book =>
                        <div className="book-item">
                            <div className="cover">
                                <img src={book.cover} alt="book cover"/>
                            </div>
                            <div className="legend">
                                <h5>{book.name}</h5>
                            </div>
                                
                        </div>
                    )}
                </div>
                
            </React.Fragment>
        )
    }
}
export default Books;

