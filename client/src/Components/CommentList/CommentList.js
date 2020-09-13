import React from 'react';

class CommentList extends React.Component {
    constructor(props) {
        super();

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
            }
        )
        .catch(function(error){
            console.log("fetch error: ")
            console.log(error);
        });
    }

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
        return(
            <div>
                <h2>Comment List</h2>
            </div>
        );
    }
}

export default CommentList;