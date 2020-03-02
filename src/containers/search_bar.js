import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCountries, fetchRateExchange } from '../actions/index'

class SearchBar extends Component {
    componentDidMount() {
        this.props.fetchCountries()
    }
    
    renderSelectCountries() {
        return (
            <select className="search_bar form-control" 
            onChange={e => this.onChangeCountrie(e)}>
                {this.props.countries.map((c) => {
                    return (
                    <option key={c.code} value={c.code}>
                        {c.name}
                    </option>
                    )
                })}
            </select>
        )
    }

    onChangeCountrie(e) {
        const countrieCode = e.target.value
        //const countrie = lodash.find(this.props.countries, {code: countrieCode})
        const countrie = this.props.countries.find(item => item.code === countrieCode )
        this.props.fetchRateExchange(countrie)
    }


    // Rendu du composant
    render() {
        return (
            <form className="form-group">
                {this.renderSelectCountries()}
            </form>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        countries: store.countriesReducer.countries
    }
}

const mapDispatchToProps = {
    fetchCountries,
    fetchRateExchange
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)