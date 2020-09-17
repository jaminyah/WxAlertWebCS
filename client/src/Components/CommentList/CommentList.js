import React from 'react';
import { Avatar } from '../../assets/avatar';
import './CommentList.css';


class CommentList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: []
        }
    }
    
    fetchCommentList() {
        console.log("Fetch comment list");

        fetch('/comments')
        .then(function(response){
            console.log(" fetch .then");
            return response.json();
        })
        .then(
            (result) => {
                console.log(result);
               // console.log(result.data);
               // this.setState({
               //     form: {blob: result.data}
               // })
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

    render() {
        return (
            <div>
            <h2>Comment List</h2>
                { this.state.comments.map((posting, i) =>
                    (
                        <div className="commentlist-container" key={i}>
                            <div class="box-orange">
                                <img src={Avatar} alt="avatar"/>
                            </div>
                            <div class="box-blue">
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