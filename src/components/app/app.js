import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ItemDetails, { Record } from '../item-details/item-details';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry'
import Row from '../row';

import './app.css'; 

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        showRandomPlanet: true,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }

    render() {

        
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> : 
            null;
        
        const { getPerson, 
                getStarship,
                getPersonImage,
                getStarshipImage} = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId = {11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field = "genter" label ="Gender"></Record>
                <Record field="eyeColor" label = "Eye color"></Record>
            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails 
                itemId={5} 
                getData={getStarship}
                getImageUrl={getStarshipImage}>
            <Record field = "model" label ="Model"></Record>
            <Record field="length" label = "Length"></Record>
            <Record field="costInCredits" label = "Cost"></Record>
            </ItemDetails>
        );
        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    <Row
                    left={personDetails}
                    right={starshipDetails}
                    />
                </div>
            </ErrorBoundry>
              );
                    {/* { planet } */}
                    {/* <div className= "row mb2 button-row">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton/>
                    </div> */}
                    {/* <PeoplePage/> */}
{/* 
                <div className="row mb2">
                    <div className = "col-md-6">
                        <ItemList onItemSelected = {this.onPersonSelected} 
                        getData = {this.swapiService.getAllPlanets}
                        renderItem = {(item) => item.name}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson} />
                    </div>
                </div>
                <div className="row mb2">
                    <div className = "col-md-6">
                        <ItemList 
                            onItemSelected = {this.onPersonSelected} 
                            getData = {this.swapiService.getAllStarships}
                            renderItem = {(item) => item.name} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson} />
                    </div>
                </div> */}
      
    }
};

