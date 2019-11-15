import React, { Component } from 'react'
import EditProfile from './editProfile'
import EditProfilePicture from './editProfilePicture'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.toggleMode = this.toggleMode.bind(this)
        this.state = {
            pictureMode: false
        }
    }

    toggleMode(e){
        this.setState({pictureMode: !this.state.pictureMode})
    }

    render(){
        return(
            <div>
                {
                    this.state.pictureMode ? 
                    <div className="container"><EditProfilePicture onClick={this.toggleMode}/></div>: 
                    <div className="container"><EditProfile onClick={this.toggleMode}/></div>
               }
            </div>         
        )
    }
}