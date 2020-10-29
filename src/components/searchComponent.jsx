import React from 'react';
import './search.css'

class SearchComponent extends React.Component{

constructor(props){
  super(props);
  this.state = {searchText :''};
}

  render(){
    var isStart = this.props.isStart;

    return(
      <div>
        <form onSubmit ={event => {event.preventDefault();
          this.props.onSubmit(this.state.searchText);
        }}>

      <div className={` input-group input-group-lg ${this.props.cssClass}`} >
      <div>

      {isStart ? (
        <div >
        <div className="input-group-prepend">

    <span className ='span1'>I M G L E </span>
    </div>
    </div>
) :null}

      </div>
     <input type="text" className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange = {event =>this.setState({searchText:event.target.value})} />
     </div>
        </form>
      </div>
    );
  }


}

export default SearchComponent;

// class="input-group-text" id="inputGroup-sizing-lg"
