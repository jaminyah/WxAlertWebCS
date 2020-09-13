/* Main driver function.
 * Run: go run main.go fetch.go submit.go
 */
/* Main driver function.
 * Run: go run main.go fetch.go submit.go
 */

package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/mattn/go-sqlite3"
	"github.com/mojocn/base64Captcha"
)

var database, db_err = sql.Open("sqlite3", "./wxalert.db")
var store = base64Captcha.DefaultMemStore

type UserComment struct {
	Id        int    `json:"id"`
	Name      string `json:"name"`
	Message   string `json:"comment"`
	Timestamp string `json:"date"`
}

//configJsonBody json request body.
type configJsonBody struct {
	Id            string
	CaptchaType   string
	VerifyValue   string
	DriverAudio   *base64Captcha.DriverAudio
	DriverString  *base64Captcha.DriverString
	DriverChinese *base64Captcha.DriverChinese
	DriverMath    *base64Captcha.DriverMath
	DriverDigit   *base64Captcha.DriverDigit
}

// base64Captcha create http handler
func generateCaptchaHandler(w http.ResponseWriter, r *http.Request) {
	//parse request parameters
	decoder := json.NewDecoder(r.Body)
	var param configJsonBody
	err := decoder.Decode(&param)
	if err != nil {
		log.Println(err)
	}
	defer r.Body.Close()
	var driver base64Captcha.Driver

	//create base64 encoding captcha
	switch param.CaptchaType {
	case "audio":
		driver = param.DriverAudio
	case "string":
		driver = param.DriverString.ConvertFonts()
	case "math":
		driver = param.DriverMath.ConvertFonts()
	case "chinese":
		driver = param.DriverChinese.ConvertFonts()
	default:
		driver = param.DriverDigit
	}
	c := base64Captcha.NewCaptcha(driver, store)
	id, b64s, err := c.Generate()
	body := map[string]interface{}{"code": 1, "data": b64s, "captchaId": id, "msg": "success"}
	if err != nil {
		body = map[string]interface{}{"code": 0, "msg": err.Error()}
	}
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	json.NewEncoder(w).Encode(body)
}

func main() {

	if db_err != nil {
		log.Fatal(db_err)
	}
	defer database.Close()

	statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY, username TEXT, comment TEXT, date TEXT)")
	statement.Exec()

	//http.Handle("/", http.FileServer(http.Dir("static")))
	//http.Handle("/", http.FileServer(rice.MustFindBox("static").HTTPBox()))

	http.HandleFunc("/submit", submitAjax)

	http.HandleFunc("/comments", fetchComments)

	//api for creating captcha
	http.HandleFunc("/api/getCaptcha", generateCaptchaHandler)

	//api for verify captcha
	//http.HandleFunc("/api/verifyCaptcha", captchaVerifyHandle)

	fmt.Printf("Starting HTTP server...\n")
	if serverErr := http.ListenAndServe(":8088", nil); serverErr != nil {
		log.Fatal(serverErr)
	}
}
