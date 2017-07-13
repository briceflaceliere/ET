import React from 'react';

class QuickSearch extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        let selectDistance = <select class="distance" defaultValue='10000'>
            <option value='0'>à</option>
            <option value='500'>à 500 m de</option>
            <option value='1000'>à 1 km de</option>
            <option value='5000'>à 5 km de</option>
            <option value='10000'>à 10 km de</option>
            <option value='15000'>à 15 km de</option>
            <option value='20000'>à 20 km de</option>
            <option value='25000'>à 25 km de</option>
            <option value='30000'>à 30 km de</option>
            <option value='50000'>à 50 km de</option>
            <option value='75000'>à 75 km de</option>
            <option value='100000'>à 100 km de</option>
        </select>;

        let selectNearDistance = <input type="number" class="nearDistance" defaultValue='500' min="100" step="100" />;


        return (
            <div class="quick-search">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text" title="Je cherche à acheter ou louer">
                            Je cherche à
                            <select>
                                <option>Acheter</option>
                                <option>Louer</option>
                            </select>
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col s4">
                        <input type="checkbox" name="type-house" id="type-house" class="filled-in" defaultChecked={true} />
                        <label for="type-house">Une maison</label>
                    </div>
                    <div class="col s8">
                        <input type="checkbox" name="type-apartment" id="type-apartment" class="filled-in" defaultChecked={true} />
                        <label for="type-apartment">Un appartement</label>
                    </div>
                </div>
                <div class="row no-margin-bottom">
                    <div class="col s3">
                        {selectDistance}
                    </div>
                    <div class="col s7">
                        <input type="text" placeholder="Ville, Quartier, Adresse..." />
                    </div>
                    <div class="col s2">
                        <i class="material-icons add-location tooltipped"
                           data-position="right"
                           data-delay="50"
                           data-tooltip="Ajouter un autre lieu">
                            add_circle
                        </i>
                    </div>
                </div>
                <div class="row">
                    <div class="col s6">
                        <input type="checkbox" id="near-primary-school" class="filled-in" />
                        <label for="near-primary-school">
                            à {selectNearDistance}m d'une école primaire
                        </label>
                    </div>
                    <div class="col s6">
                        <input type="checkbox" id="near-nursery-school" class="filled-in" />
                        <label for="near-nursery-school">
                            à {selectNearDistance}m d'une école maternelle
                        </label>
                    </div>
                    <div class="col s6">
                        <input type="checkbox" id="near-middle-school" class="filled-in" />
                        <label for="near-middle-school">
                            à {selectNearDistance}m d'un collège
                        </label>
                    </div>
                    <div class="col s6">
                        <input type="checkbox" id="near-high-school" class="filled-in" />
                        <label for="near-high-school">
                            à {selectNearDistance}m d'un lycée
                        </label>
                    </div>
                    <div class="col s6">
                        <input type="checkbox" id="near-supermarket" class="filled-in" />
                        <label for="near-supermarket">
                            à {selectNearDistance}m d'un supermarché
                        </label>
                    </div>
                </div>
                <div class="row no-margin-bottom">
                    <div class="col s12 center-align">
                        <button class="waves-effect waves-light btn">
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuickSearch;