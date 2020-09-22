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

var database, dbErr = sql.Open("sqlite3", "./wxalert.db")
var store = base64Captcha.DefaultMemStore

// UserComment data structure
type UserComment struct {
	ID        int    `json:"id"`
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

	fmt.Println("Stage 1 - no error")

	decoder := json.NewDecoder(r.Body)
	var param configJsonBody

	err := decoder.Decode(&param)
	if err != nil {
		log.Println(err)
	}
	defer r.Body.Close()
	var driver base64Captcha.Driver

	fmt.Println("Stage 2 - no error")

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

	fmt.Println("Stage 3 - no error")

	c := base64Captcha.NewCaptcha(driver, store)

	fmt.Println("Stage 3.1 - no error")

	id, b64s, err := c.Generate()

	fmt.Println("Stage 3.2 - no error")

	body := map[string]interface{}{"code": 1, "data": b64s, "captchaId": id, "msg": "success"}

	fmt.Println("Stage 3.3 - no error")

	if err != nil {
		body = map[string]interface{}{"code": 0, "msg": err.Error()}
	}

	fmt.Println("Stage 4 - no error")

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	json.NewEncoder(w).Encode(body)
}

// base64Captcha verify http handler
func captchaVerifyHandler(w http.ResponseWriter, r *http.Request) {

	//parse request json body
	decoder := json.NewDecoder(r.Body)
	var param configJsonBody
	err := decoder.Decode(&param)
	if err != nil {
		log.Println(err)
	}
	defer r.Body.Close()
	//verify the captcha
	body := map[string]interface{}{"code": 0, "msg": "failed"}
	if store.Verify(param.Id, param.VerifyValue, true) {
		body = map[string]interface{}{"code": 1, "msg": "ok"}
	}

	//set json response
	w.Header().Set("Content-Type", "application/json; charset=utf-8")

	json.NewEncoder(w).Encode(body)

}

func main() {

	if dbErr != nil {
		log.Fatal(dbErr)
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
	http.HandleFunc("/api/verifyCaptcha", captchaVerifyHandler)

	fmt.Printf("Starting HTTP server...\n")
	if serverErr := http.ListenAndServe(":8088", nil); serverErr != nil {
		log.Fatal(serverErr)
	}
}
