import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList'



class App extends React.Component {
    state = {
        images: []
    };
    onSearchSubmit = async term => { 
      const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term },
            headers: {
                Authorization:
                 'Client-ID af275ff222e05bca5f4a32727bf4410ca4ee069e1f77bfe7c1b82c300ddad18a'
                }  
        });

        this.setState({images: response.data.results});
        
    };
    render(){
return(
<div className="ui container" style={{marginTop:'10px'}}>
<SearchBar onSubmit={this.onSearchSubmit} />
<ImageList images={this.state.images} /> 
</div>
);
}
} 


export default App;