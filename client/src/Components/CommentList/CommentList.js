import React from 'react';
import { Avatar } from '../../assets/avatar';
import './CommentList.css';


class CommentList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: [],
            isUpdate: false
        }
    }
    
    fetchCommentList() {
        console.log("Fetch comment list");

        fetch('/api/comments')
        .then(function(response){
            console.log(" fetch .then");
            return response.json();
        })
        .then(
            (result) => {
               this.setState((state) => {
                   return {comments: result}
               })
            }
        )
        .catch(function(error){
            console.log("fetch error: ")
            console.log(error);
        });
    }


    componentDidMount() {
        this.fetchCommentList();
    }

   componentDidUpdate(prevState) {
        if (this.props.isUpdated !== prevState.isUpdated) {
            this.setState({isUpdated: this.props.isUpdated})
            this.setState({ getCaptcha: this.props.getCaptcha })
            if (this.props.isUpdated === true) {
                this.fetchCommentList();
            }
        }
    }

    render() {
        return (
            <div>
                { this.state.comments.map((posting, i) =>
                    (
                        <div className="commentlist-container" key={i}>
                            <div className="box-orange">
                                <img src={Avatar} alt="avatar"/>
                            </div>
                            <div className="box-blue">
                                <div id="name">
                                    { posting.name }
                                </div>
                                <div id="date">
                                    { posting.date }
                                </div>
                                <div id="content">
                                    { posting.comment }
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        );  
    }    
}

export default CommentList;