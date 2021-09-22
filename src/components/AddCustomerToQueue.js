import { useState } from 'react'

const AddCustomerToQueue = () => {

    const[number, setNumber] = useState('');
    const[showForm,setShowForm] = useState(true);
    

    const onSubmit = (e) => {
        e.preventDefault()
    
        
/**************Format Contact Phone Number Input *********************/
       
        function formatPhoneNumber(phoneNumber) {
                     
            if(phoneNumber.length === 10){                                
                return ("+1"+phoneNumber)
            }
            else if(phoneNumber.length === 11){         
            return ("+"+phoneNumber)
            }
            else return null
        }

        var numberInput = formatPhoneNumber(number)
        
        if(numberInput == null){
            alert('Please Enter a Valid Phone Number')
            return
        }
       
/************* Change Form State *****************************************/

        setShowForm(false);
        
        


/************** OBTAINING OAUTH TOKEN ***********************************/
        const oauthAuth = "MGY0YmRiNWYxNTgyNDUyNmJmMjNkODZjMmQwYzlhYTc6amQ0c25LRU9xMmZ0WkNfaDdxWWthREtCYmo5SU93dEV4YVhLQ1RKWEt4RFczVi1lU0lMcVBEbm5Zb2hGbFIxVVZBQm1XS196NTNpeUZVNjdNc0RYemc="
        const proxy = "https://rocky-peak-20701.herokuapp.com/"  //instance of cors-anywhere server I created with a default name

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Basic " + oauthAuth);
          
        
          
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
          
        fetch(proxy + 'https://demoeng.talkdeskid.com/oauth/token?grant_type=client_credentials&scope=callback:write', requestOptions)
          .then(response => response.json())
          .then(result => req(result))
          .catch(error => console.log('error', error));


          
/*************** USING OAUTH TOKEN TO MAKE CALL TO CALLBACK API **********/           
          let req = (result) =>{
            
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + result.access_token);
            

            var raw = JSON.stringify({
            "talkdesk_phone_number": "+14155786136",
            "contact_phone_number": numberInput
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    

            fetch("https://api.talkdeskapp.com/calls/callback", requestOptions)
              .then(response => response.text())
              .catch(error => console.log('error', error));
               }   
    }



return (
    showForm?
    <form onSubmit={onSubmit}>
        <div>
            <label className = 'get-back'>We will get back to you as soon as we can!</label>
        </div>
        <div><label className = 'wait-time'>Estimated wait time: 30 minutes</label></div>
        
        <div className = 'form-control'>
        <input type = 'number' placeholder='Phone Number'  value ={number} onChange ={(e) => 
            setNumber(e.target.value)} />
        </div>
        <input type = 'submit' value ='Join Queue'  className='submit-button'  />
    </form> 
    :<div>
    <label className = 'get-back'>You have been entered into the queue</label>
    <label className = 'get-back'>An agent will call you back as soon as possible</label>
    <label className = 'wait-time'>Estimated wait time: 30 minutes</label>
    </div>
    
        )
 }

export default AddCustomerToQueue

