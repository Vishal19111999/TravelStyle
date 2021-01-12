import React from 'react';
import AsiaArticle from '../Articles/AsiaArticles.json';
import ParisArticle from '../Articles/ParisArticles.json';
import AmericaArticle from '../Articles/AmericaArticles.json';
import {Link} from 'react-router-dom';
import './Cards.css';

class Card extends React.Component{
     constructor(props){
         super(props);
     }
    render(){
        if(this.props.cat=="Asia"){
            return(
                <Link to="/asia/asia-1">
                    <div className="card scale">
                        <img src={AsiaArticle[0].pic} />
                        <h2>
                            {AsiaArticle[0].title}
                        </h2>
                        <p className="content">
                            {AsiaArticle[0].Summary}
                        </p>
                        <br />
                        <p className="dateProp">
                        {AsiaArticle[0].category}/ {AsiaArticle[0].date}
                        </p>
                    </div>
                </Link>
            );
        }
        else if(this.props.cat=="Paris"){
            return(
                <Link to="/paris/paris-1">
                <div className="card">
                    <img src={ParisArticle[0].pic} />
                    <h2>
                        {ParisArticle[0].title}
                    </h2>
                    <p className="content">
                        {ParisArticle[0].Summary}
                    </p>
                    <br />
                    <p className="dateProp">
                     {ParisArticle[0].category}/ {ParisArticle[0].date}
                    </p>
                </div>
                </Link>
            );
        }
        else{
            return(
                <Link to="/america/america-1">
                    <div className="card">
                    <img src={AmericaArticle[0].pic} />
                    <h2>
                        {AmericaArticle[0].title}
                    </h2>
                    <p className="content">
                        {AmericaArticle[0].Summary}
                    </p>
                    <br />
                    <p className="dateProp">
                     {AmericaArticle[0].category}/ {AmericaArticle[0].date}
                    </p>
                </div>
                </Link>
            );
        }
    }
}

export default Card;