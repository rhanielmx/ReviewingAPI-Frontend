import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import consts from '../consts'
import { login as confirmUser } from '../auth/authActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class EditProfilePicture extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.state = {
            user: JSON.parse(localStorage.getItem('_user'))
        };
    }

    handleFileChange(e){
        e.preventDefault()
        var selectedFile = e.target.files[0];
        var reader = new FileReader();

        var imgtag = document.getElementById("myImage");
        imgtag.title = selectedFile.name;

        reader.onload = function(event) {
            imgtag.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
    }

    handleUploadImage(e) {
        e.preventDefault()
        const data = new FormData(document.getElementById('editProfilePicture'))
        data.append('file', this.uploadInput.files[0]);

        const token = this.props.user.token
        const options = {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'authorization': `Bearer ${token}`
            },
            data: data,
            url: `${consts.USERS_API}/upload`,
        };
        axios(options)
            .then((response) => {
                const values = {
                    "email": this.props.user.email,
                    "password": this.passwordInput.value
                }
                this.props.confirmUser(values)
                toastr.success('Sucesso', 'Foto de perfil atualizada com sucesso')
            });

    }

    render() {
        return (
            <div className="wrapper">
                <ContentHeader title="Alterar Foto de Perfil" className="col text-center" />
                <Content>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <div className="row">
                                <div id="form" className="col-5">
                                    <form onSubmit={this.handleUploadImage}
                                        encType="multipart/form-data" id="editProfilePicture">
                                        <div className="file-input input-group mb-3">
                                            <input className="form-control" onChange={this.handleFileChange}
                                                ref={(ref) => { this.uploadInput = ref; }} type="file" />
                                        </div>
                                        <div className="file-input input-group mb-3">
                                            <input className="form-control" type="password"
                                                placeholder="Informe sua senha para alterar sua foto"
                                                    ref={(ref) => { this.passwordInput = ref; }}/>
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span className={`fas fa-lock`}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Salvar Alterações
                                            </button>
                                            <button className="btn btn-default btn-block"
                                                onClick={this.props.onClick}>
                                                Editar Perfil
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-6">
                                    <img className="profile-pic" id="myImage" 
                                        src={this.props.user.profile} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Content>
            </div>
        );
    }
}

EditProfilePicture = reduxForm({ form: 'editProfilePictureForm' })(EditProfilePicture)
const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ confirmUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePicture)