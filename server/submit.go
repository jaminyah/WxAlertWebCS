/* Submit client data http handler. */

package main

import (
	//"fmt"
	"encoding/json"
	"net/http"
	"time"
)

func submitAjax(w http.ResponseWriter, r *http.Request) {

	//fmt.Println("Received ajax data.")

	// Invoke ParseForm before reading form values
	r.ParseForm()
	//for key, value := range r.Form {
	//	fmt.Printf("%s: %s\n", key, value)
	//}

	// Acknowledge receiving the data
	//fmt.Printf("User name: %s\n", r.FormValue("username"))
	//fmt.Printf("Message body: %s\n", r.FormValue("message"))

	// Format current time
	now := time.Now()
	//fmt.Println(now.Format("Jan 2, 2006 - 3:04 pm MST"))
	var nowTime string = now.Format("Jan 2, 2006")

	// Client data received
	userName := r.FormValue("username")
	userMessage := r.FormValue("message")

	// Insert into database
	statement, _ := database.Prepare("INSERT INTO comments (username, comment, date) VALUES (?, ?, ?)")
	statement.Exec(userName, userMessage, nowTime)

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
