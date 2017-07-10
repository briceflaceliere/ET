import React from 'react';
import {Tabs, Tab, Input} from 'react-materialize';

class QuickSearch extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        let getForm = function(buy = false) {
            return (
                <div class="row">
                    <div class="col s12">
                        <Input name='type' type='checkbox' value='house' label='Une maison' className='filled-in'
                               defaultChecked='checked'/>
                        <Input name='type' type='checkbox' value='apartment' label='Un appartement' className='filled-in'
                               defaultChecked='checked'/>
                        {
                            buy &&
                            <Input name='type' type='checkbox' value='ground' label='Un terrain' className='filled-in' />
                        }
                    </div>
                    <div class="col s12">
                        <Input s={4} type='select' className="distance" defaultValue='10000'>
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
                        </Input>
                        <Input s={7} placeholder="Ville, Quartier, Adresse..." />
                    </div>
                    <div class="col s12">
                        <Input s={4} type='select' className="distance" defaultValue='10000'>
                            <option value='0'>ou à</option>
                            <option value='500'>et à 500 m de</option>
                            <option value='1000'>et à 1 km de</option>
                            <option value='5000'>et à 5 km de</option>
                            <option value='10000'>et à 10 km de</option>
                            <option value='15000'>et à 15 km de</option>
                            <option value='20000'>et à 20 km de</option>
                            <option value='25000'>et à 25 km de</option>
                            <option value='30000'>et à 30 km de</option>
                            <option value='50000'>et à 50 km de</option>
                            <option value='75000'>et à 75 km de</option>
                            <option value='100000'>et à 100 km de</option>
                        </Input>
                        <Input s={7} placeholder="Ville, Quartier, Adresse..." />
                    </div>
                </div>
            );
        };

        return (
            <div class="quick-search">
                <div class="row">
                    <h1 class="white-text" title="Je cherche à acheter ou louer">Je cherche à</h1>
                    <Tabs class="tabs tabs-fixed-width">
                        <Tab title="Acheter" active>
                            <div class="tab-content col s12">
                                {getForm(true)}
                            </div>
                        </Tab>
                        <Tab title="Louer">
                            <div class="tab-content col s12">
                                {getForm(false)}
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default QuickSearch;