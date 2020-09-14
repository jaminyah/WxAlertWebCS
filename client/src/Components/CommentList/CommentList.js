import React from 'react';
import { Avatar } from '../../assets/avatar';


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


    /* Use map function to display list of comments */

    /* Reference: from original base code
    displayComments(json_data) {
        console.log(json_data);
        var comment = "";
        var list = $("<ul>");
    
        for (var i = 0; i < json_data.length; i++) {
            comment = "<div class='circle'><img src='./images/avatar.png'/>" +
            "<h3>" + json_data[i]['name'] + "</h3>" +
            json_data[i]['date'] +
            "<p>" + json_data[i]['comment'] + "</p>" + "</div>";
                
            var item = $("<li>").html(comment);
            list.append(item);
        }
        $("#comment-area").html(list);
    }
    */
    

    componentDidMount() {
        this.fetchCommentList();
    }

    render() {
        var imgStyle = {
            float: "left",
            margin: "0 12 0 0",
            borderRadius: "50%",
            backgroundColor: "#00d4ff",
            boxShadow: "1 1 2 #000"
        }

        var nameStyle = {
            padding: 8,
            margin: 4
        }

        return(
            <div>
                <h2>Comment List</h2>
                { this.state.comments.map((comment, i) =>
                    (
                        <div key={i}>
                            <img style={imgStyle} src={Avatar} alt="avatar" />
                            <br/>
                            <div style={nameStyle}>
                                <h6>{ comment.name }</h6>
                            </div>
                            <div className="comment-item">
                                <em>{ comment.date }</em>
                                <p>{ comment.comment }</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default CommentList;