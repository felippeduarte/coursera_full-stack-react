import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from "moment";
import CommentForm from './CommentFormComponent';

    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({comments}) {
        if(comments.length === 0) {
            return (<div></div>)
        } else {
            return (
                <div>
                    <h4>Comments</h4>
                    {
                        comments.map(function(comment){
                            return <CardText key={comment.id}>{comment.comment}<br/>
                                -- {comment.author}, {moment(comment.date).format('MMM DD, YYYY')}
                                </CardText>
                        })
                    }

                    <CommentForm />
                </div>
            )
        }

    }

    const DishDetail = (props) => {
        if(props.dish !== undefined) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

export default DishDetail;