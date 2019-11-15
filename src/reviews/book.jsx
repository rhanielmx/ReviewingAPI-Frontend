import React from 'react'

import If from '../common/operator/if'
import '../common/template/custom.css'

export default props => (
    <div className="container">
        <div className="row">
            <div className="col-2">
                <img src={props.thumbnail} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-10">
                <div className="book">
                    <span>{props.title}</span>
                    <span>{props.subtitle}</span>

                    <span>{props.pageCount} páginas</span>
                    <span>{props.averageRating} estrelas</span>
                    <If show={props.authors && props.authors.length !== 0 ? true : false}>
                        <span>
                            by {props.authors && props.authors.length !==0 ?
                                Object.keys(props.authors).map((k) => (props.authors[k])).join(", ") :
                                false
                                }
                        </span>
                    </If>
                    <p>
                        {props.description}
                    </p>
                    
                </div>
            </div>
        </div>
        {/* <strong>Title: </strong><span>{props.title}</span><br />
        <If show={props.subtitle ? true : false}>
            <strong>Subtitle: </strong><span>{props.subtitle}</span><br />
        </If>
        <strong>Authors: </strong>

        <strong>Page Count: </strong><span>{props.pageCount}</span><br />
        <If show={props.averageRating ? true : false}>
            <strong>Rating: </strong><span>{props.averageRating}</span><br />
        </If>
        <strong>Description: </strong><p>{props.description}</p> */}
    </div>
)