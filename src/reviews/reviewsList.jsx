import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList, getBook, createReview } from './reviewActions'
import { toastr } from 'react-redux-toastr'

import Book from './book'
import Review from './review'

import If from '../common/operator/if'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import { reduxForm, Field } from 'redux-form'
import Input from '../common/form/inputReview'


class ReviewList extends Component {
    constructor(props) {
        super(props)
        this.props.getBook(this.props.isbn)
    }

    renderBook() {
        const book = this.props.book
        return <Book title={book.title} subtitle={book.subtitle}
            authors={book.authors} pageCount={book.pageCount}
            averageRating={book.averageRating} description={book.description}
            thumbnail={book.thumbnail} />
    }

    renderRows() {
        const list = this.props.list
        return list.map(r => (
            <div className="post" key={r.id} >
                <Review _key={r.id} title={r.title}
                    name={r.author_name} username={r.author_username}
                    profile={r.author_profile}
                    description={r.description} created={r.created} />
            </div>
        ))
    }

    submitReview(description) {
        const data = {
            'title': this.props.book.title,
            'description': description.review,
            'isbn': this.props.book.isbn_13
        }
        
        this.props.createReview(data, this.props.user.token)
        toastr.success('Sucesso', 'Review criada com sucesso.')

    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="container">
                <If show={!this.props.book.loading && this.props.book.length !== 0 ? true : false}
                    _return={<Content><div className="col text-center">Ainda não há o que mostrar. Faça uma Pesquisa...</div></Content>}>
                    <ContentHeader title="Book" />
                    <Content>
                        {this.renderBook()}
                    </Content>
                </If>
                <If show={!this.props.book.loading && this.props.list.length !== 0 ? true : false}>
                    <ContentHeader title="Reviews" />
                    <Content>
                        {this.renderRows()}
                    </Content>
                </If>
                <If show={!this.props.book.loading && this.props.book.length !== 0 ? true : false}>
                    <ContentHeader title="Comentar" />
                    <Content>
                        <form onSubmit={handleSubmit(v => this.submitReview(v))}>
                            <Field component={Input} name="review"
                                placeholder="Deixe a sua opinião"/>
                            <div className="col-xs-4">
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </Content>
                </If>
            </div>
        )
    }

}

ReviewList = reduxForm({
    form: 'reviewForm'
})(ReviewList)
const mapStateToProps = state => ({ book: state.review.book, list: state.review.list, isbn: state.review.isbn, user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, getBook, createReview }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList)