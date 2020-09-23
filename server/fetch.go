/* Fetch comments from database handler. */

package main

import (
	"encoding/json"
	"net/http"
)

func fetchComments(w http.ResponseWriter, r *http.Request) {

	// Read database
	rows, _ := database.Query("SELECT id, username, comment, date FROM comments ORDER BY id DESC LIMIT 0, 50")

	var dbID int
	var dbName string
	var dbMessage string
	var dbTimestamp string
	var userComment UserComment
	var userComments []UserComment

	for rows.Next() {
		rows.Scan(&dbID, &dbName, &dbMessage, &dbTimestamp)

		userComment.ID = dbID
		userComment.Name = dbName
		userComment.Message = dbMessage
		userComment.Timestamp = dbTimestamp
		userComments = append(userComments, userComment)
	}

	defer rows.Close()

	jsonStr, _ := json.Marshal(userComments)

	// Send back data to client
	w.Write(jsonStr)
}
