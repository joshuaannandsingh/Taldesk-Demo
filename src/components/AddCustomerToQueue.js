import { useState } from 'react'

const AddCustomerToQueue = () => {

    const[number, setNumber] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Origin","localhost:3000")
        
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Basic MGY0YmRiNWYxNTgyNDUyNmJmMjNkODZjMmQwYzlhYTc6amQ0c25LRU9xMmZ0WkNfaDdxWWthREtCYmo5SU93dEV4YVhLQ1RKWEt4RFczVi1lU0lMcVBEbm5Zb2hGbFIxVVZBQm1XS196NTNpeUZVNjdNc0RYemc=");
               
        var raw = "";
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://demoeng.talkdeskid.com/oauth/token?grant_type=client_credentials&scope=callback:write", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));


            /*var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer eyJraWQiOiIxYWI2YjBhNjAxNTY0MmY4YjA5MWM3MjE1MWIxMGQ5MCIsImFsZyI6IkVTMjU2In0.eyJpc3MiOiJodHRwczovL3d3dy50YWxrZGVza2lkLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBpLnRhbGtkZXNrYXBwLmNvbSIsImV4cCI6MTYzMTkxMDk1MiwibmJmIjoxNjMxOTEwMzUyLCJpYXQiOjE2MzE5MTAzNTIsImp0aSI6IjE2NWI5ZDNmZjlhMjQ1ZDc4ZmY4MjcxNmFmYjEwYTk0IiwiY2lkIjoiMGY0YmRiNWYxNTgyNDUyNmJmMjNkODZjMmQwYzlhYTciLCJndHkiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJzY3AiOlsiY2FsbGJhY2s6d3JpdGUiXSwicmxtIjoiTUFJTiIsImFpZCI6IjU5NjUwOTUxMTU3OGU1MDAxNDEzMDkwMSIsImFjYyI6ImRlbW9lbmciLCJwc24iOiJDVVNUT01FUiIsInN1YiI6IjBmNGJkYjVmMTU4MjQ1MjZiZjIzZDg2YzJkMGM5YWE3In0.1ugt0VMxRShf0cJafaIUKlZWpXDmKqkWDLaxBVyH1ILgrG1jKzTZhoJ-sUdY29TJxyaQAP3a9TdJzxGVydWXoA");
            myHeaders.append("Cookie", "rack.session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU5YTJiZWIwMGE3ZjkzMTNlNjE2MjNiODJmYzhkMDAyOTZjODhjOGQxZGMwZmUxYmNhYjU2MzE1MmM1NmM4MGE1BjsARkkiCWNzcmYGOwBGSSIxL2YrbFRubUExSjk0MXIvaC8yVW9jcnNaMzJ5V0g3VzVMVDRhaHdnKy9wND0GOwBGSSINdHJhY2tpbmcGOwBGewZJIhRIVFRQX1VTRVJfQUdFTlQGOwBUSSItYjlkYTc4MzQ3YzA0NmY5YzBhOWIwMGE4MjQwMzYyMGEwNmE1YjAyOQY7AEY%3D--a7511146efbdaec45490a0ad6a13c97bd3ac4fe2");

            var raw = JSON.stringify({
            "talkdesk_phone_number": "+14155786136",
            "contact_phone_number": "+18568409992"
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    

fetch("https://api.talkdeskapp.com/calls/callback", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/
        }
return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Phone Number</label>
            <input type = 'text' placeholder='Add Phone Number' value ={number} onChange ={(e) => 
            setNumber(e.target.value)} />
        </div>
        <input type = 'submit' value ='Save Customer'  />
    </form>
        )
 }

export default AddCustomerToQueue

