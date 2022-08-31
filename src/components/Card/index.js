import { Component } from 'react';
import './index.css'


class Card extends Component {
     render () {
        const data = this.props.contributions;
        return (
            <div className="card">
                <text className="title"> <strong> {this.props.title} </strong></text>
                <div className="material">
                    <br></br>
                    <strong>Overview: </strong> {this.props.overview}
                    <br></br> <br></br>
                    {this.props.content}
                    <br></br>
                    <ul>
                        {data.map(item => {
                        return <li>{item}</li>;
                        })}
                    </ul>
                    <strong> Link(s): </strong> <a href={this.props.ext_link}> {this.props.link_text} </a>
                </div>
            </div>
        );
    }
}

export default Card