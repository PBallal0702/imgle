import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchComponent from './components/searchComponent.jsx';
import ImgList from './components/imgList.jsx';
import './index.css';

class App extends React.Component{

  state ={images :[] , length : 0};

  onSearchSubmit =async(term) =>{
    var response = await axios.get('https://api.unsplash.com/search/photos',{
      params:{query:term},
      headers:{
        Authorization: 'Client-ID rwMlE5fSpsV0EwYiOEtpmeBARfto8ST8qwOYKjsH1tI'
      }
    })
    console.log(response.data.results);
    this.setState({images:response.data.results , length:response.data.results.length })

  }

  render(){
    const len = this.state.length;

    if( len === 0){
      return(<div>
        <div className ='searchbar' >
        <h1> I M G L E</h1>
        <SearchComponent  onSubmit = {this.onSearchSubmit} cssClass ={'my-control'} isStart ={false}/>
        </div>

        </div>)
    }
    else{
      return(<div className ='searcedbar'>
        <div className ='centerElement'>
        <SearchComponent  onSubmit = {this.onSearchSubmit} cssClass ={'imgSearched'} isStart ={true}/>
        </div>
        <ImgList images = {this.state.images} />

        </div>)
    }

  }


}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
