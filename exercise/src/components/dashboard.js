import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import './dashboard.css';
import {Details} from './details';


class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:3000/data');
    }

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentApp: 'INJESTOR'
        };
        this.showDetails =  this.showDetails.bind(this);

    }

    showDetails(item) {

        this.setState({
            currentApp: item
        });
    }

    render() {

        let unique = [ ...new Set(this.props.items.map(item => item.appId))];
        let tests = this.props.items.filter((items) => this.state.currentApp === items.appId);

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <div>Loading</div>;
        }

        return (
            <div>
                <div className="Dashboard-Container">
                    {
                        unique.map((item, index) => (
                            <div className="card Dashboard-Card" key={index}>
                                <div className="card-body Dashboard-Card-Body" onClick={()=>this.showDetails(item)}>
                                    {item}
                                </div>
                            </div>

                        ))
                    }
                    </div>
                <div className="Details-Container">
                    <Details tests={tests} />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        currentApp: state.currentApp
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
