import React, {Component} from  'react';
export default class extends Component{
    constructor(props){
        super(props)
        this.userInfoHandle = this.userInfoHandle.bind(this);
    }
    componentDidMount() {
        this.props.userInfoActions.update({
            name:'Jack',
            password:'123'
        })
    }
    userInfoHandle(){
        console.log(this)
        this.props.userInfoActions.update({
            name:'Jone',
            password:'456'
        })
    }
    render(){
        return(
            <div className="container">
                <div className="login">
                    <h1> This is login page width React-Redux !</h1>
                    <p>
                        {this.props.userInfo.name}
                    </p>
                    <p>
                        {this.props.userInfo.password}
                    </p>
                    <input type="button" value="修改" onClick={this.userInfoHandle}/>
                </div>
            </div>
        )
    }
}