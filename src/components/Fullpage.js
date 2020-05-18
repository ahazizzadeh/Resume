import React , {Component} from 'react';
import './Fullpage.css'

export class Fullpage extends Component{
    render(){
        const {children} = this.props
        return(
            <div className={`fullpage ${this.props.className || ''}`}>
                {children}
            </div>
        )
    }
}
