import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from "moment";

class Dishdetail extends Component {

    renderComments() {
        if(this.props.dish.comments.length === 0) {
            return (<div></div>)
        } else {
            return (
                <div>
                    <h4>Comments</h4>
                    {this.props.dish.comments.map(function(comment){
                        return <CardText key={comment.id}>{comment.comment}<br/>
                            -- {comment.author}, {moment(comment.date).format('MMM DD, YYYY')};
                            </CardText>
                    })}
                </div>
            )
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments()}
                </div>
            </div>
        );
    }

}

export default Dishdetail;