import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clear, search, changeQuery } from './reviewActions'

import { Link, withRouter } from 'react-router-dom'

class ReviewSearch extends Component {
    constructor(props){
        super(props)
        this.searchHandler = this.searchHandler.bind(this)
        this.keyHandler = this.keyHandler.bind(this)
    }    

    searchHandler(e){
        const { query } = this.props
        return query ? this.props.search(query) : console.log('b')
    }

    keyHandler(e) {
        if (e.key === "Enter") {
            this.props.search(e.target.value) 
        }        
    }
    
    render() {
        return (
            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search"
                        placeholder="Procure um livro" aria-label="Search"
                        value={this.props.query}
                        onChange={this.props.changeQuery}
                        onKeyUp={this.keyHandler}/>
                    
                    <div className="input-group-append">
                        <Link to="/reviews" className="btn btn-navbar"
                                onClick={this.searchHandler}><i className="fas fa-search"></i>
                        </Link>
                    </div>
                </div>
            </form>

        )
    }
}

const mapStateToProps = state => ({isbn: state.review.isbn, query: state.review.query})
const mapDispatchToProps = dispatch => bindActionCreators({clear, search, changeQuery }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReviewSearch))