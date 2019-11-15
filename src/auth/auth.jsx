import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, register } from './authActions'
import Row from '../common/layout/row'

// import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }
    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }
    onSubmit(values) {
        const { login, register } = this.props
        this.state.loginMode ? login(values) : register(values)
    }
    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <div className="hold transition login-page">
                <div className="login-box">
                <div className="login-logo"><b> Reviewing</b> API</div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bem vindo!</p>
                        <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                            <Field component={Input} type="input" name="name"
                                placeholder="Nome" icon='user' hide={loginMode} />
                            <Field component={Input} type="input" name="username"
                                placeholder="Usuário" icon='user' hide={loginMode} />
                            <Field component={Input} type="email" name="email"
                                placeholder="E-mail" icon='envelope' />
                            <Field component={Input} type="password" name="password"
                                placeholder="Senha" icon='lock' />
                            <Field component={Input} type="password" name="confirm_password"
                                placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
          
                            <Row>                                
                                <div className="col text-center">
                                    <button type="submit"
                                        className="btn btn-primary btn-block ">
                                        {loginMode ? 'Entrar' : 'Registrar'}
                                    </button>
                                </div>
                            </Row>
                        </form>
                        <br />
                        <a href onClick={() => this.changeMode()}>
                            {loginMode ? 'Novo usuário? Registrar aqui!' :
                                'Já é cadastrado? Entrar aqui!'}
                        </a>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

Auth = reduxForm({
    form: 'authForm'
})(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, register },
    dispatch)
export default connect(null, mapDispatchToProps)(Auth)  