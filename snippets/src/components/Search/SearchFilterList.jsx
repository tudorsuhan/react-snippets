import React, { Component } from 'react'

const ProgrammingLanguage = props => <li className="language-item">{props.name}</li>

class ProgrammingLanguageFilter extends Component {
    handleChange = (event) => {
        this.props.updateSearch(event.target.value)
    }
    render() {
        return (
            <input 
                type="text" 
                placeholder="Find a programming language" 
                className="input-search" 
                onChange={this.handleChange} 
                value={this.props.searchText || ''} 
            />
        )
    }
}

class ProgrammingLanguageList extends Component {
    filter(languages) {
        if(!this.props.filter) {
            return languages
        }
        return languages.filter(language => language.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
    }
    render() {
        return (
            <ul className="language-list">
                {this.filter(this.props.languages).map(language => (
                    <ProgrammingLanguage key={language} name={language} />
                ))}
            </ul>
        )
    }
}

export default class SearchFilterList extends Component {
    constructor(props) {
        super(props);
        const LANGUAGES = [
            "Javascript",
            "Ruby",
            "Rails",
            "PHP",
            "MySQL",
            "Java",
            "Python",
            "R",
            "Scala",
            "React",
            "Vue",
            "Angular",
            "Ember",
            "Backbone",
            "C++"
        ]
        this.state = {
            languages: LANGUAGES,
            filter: null
        }
    }
    updateSearch = (inputValue) => {
        // let filter = this.state.filter
        this.setState({
            filter: inputValue
        })
    }
    render() {
        return (
            <div className="app">
                <h1 className="app__title">Your Programming Languages</h1>
                <ProgrammingLanguageFilter 
                    updateSearch={this.updateSearch} 
                    searchText={this.state.filter} 
                />
                <ProgrammingLanguageList 
                    filter={this.state.filter} 
                    languages={this.state.languages}
                />
            </div>
        )
    }
}