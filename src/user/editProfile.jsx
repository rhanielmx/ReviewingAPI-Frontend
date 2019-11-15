import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { toastr } from 'react-redux-toastr'

import consts from '../consts'
import { login as confirmUser } from '../auth/authActions'
import Input from '../common/form/inputAuth'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'


class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(document.getElementById('editForm'))

        const token = this.props.user.token
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'csrf-token': 'some random shit',
                'Access-Control-Allow-Origin': '*',
                'authorization': `Bearer ${token}`
            },
            data: data,
            url: `${consts.USERS_API}/edit`,
        };
        axios(options)
            .then((response) => {
                const values = {
                    "email": data.get('email'),
                    "password": data.get('password')
                }
                this.props.confirmUser(values)
                toastr.success('Sucesso', 'Perfil atualizado com sucesso')
            })
            .catch(e => {
                toastr.error('Erro', e)
            });

    }

    render() {
        return (
            <div className="wrapper">
                <ContentHeader title="Editar Perfil" className="col text-center" />
                <Content>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <form onSubmit={v => this.handleSubmit(v)} id="editForm">
                                <Field component={Input} type="input" name="username"
                                    placeholder="Usuário" icon='user' readOnly={true} />
                                <Field component={Input} type="input" name="name"
                                    placeholder="Nome" icon='user' />                                
                                <Field component={Input} type="email" name="email"
                                    placeholder="E-mail" icon='envelope' />
                                <Field component={Input} type="password" name="password"
                                    placeholder="Senha" icon='lock' />
                                <Field component={Input} type="password" name="confirmPassword"
                                    placeholder="Confirmar Senha" icon='lock' />
                                <div className="col text-center">
                                    <div className="row">
                                        <div className="col-6"><button type="submit"
                                            className="btn btn-primary btn-block">
                                            Confirmar Alterações
                                        </button></div>
                                        <div className="col-6">
                                            <button className="btn btn-default btn-block"
                                                    onClick={this.props.onClick}>Alterar Foto</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </Content>
            </div>
        )
    }
}

EditProfile = reduxForm({ form: 'editProfileForm' })(EditProfile)
const mapStateToProps = state => ({ user: state.auth.user, initialValues: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ confirmUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)