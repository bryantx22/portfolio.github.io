import { Component } from 'react';
import './index.css'

class Post extends Component {
     render () {
        const data = this.props.contributions;
        return (
            <div className="post">
                <strong className="title"> {this.props.title} </strong>
                <div className="summary">
                    <img style={{ width: 200, height: 'auto', padding: 10 }} src={this.props.img_link} />
                    <br></br> 
                    <a href={this.props.ext_link} className="button-6"> See full post </a>
                </div>
            </div>
        );
    }
}

export default Post

      