/* Submit client data http handler. */

package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

// FormData receives front-end data
type FormData struct {
	Username string `json:"username"`
	Message  string `json:"message"`
}

func submitAjax(w http.ResponseWriter, r *http.Request) {

	//fmt.Println("Received ajax data.")

	// Invoke ParseForm before reading form values
	//r.ParseForm()  Sept 19, 2020

	// Format current time
	now := time.Now()
	//fmt.Println(now.Format("Jan 2, 2006 - 3:04 pm MST"))
	var nowTime string = now.Format("Jan 2, 2006")

	// Client data received - Sept 19, 2020
	// userName := r.FormValue("username")
	//	userMessage := r.FormValue("message")

	//parse request json body
	decoder := json.NewDecoder(r.Body)
	var param FormData
	err := decoder.Decode(&param)
	if err != nil {
		log.Println(err)
	}
	defer r.Body.Close()

	userName := param.Username
	userMessage := param.Message

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
