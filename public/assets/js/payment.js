
 function requestCheckout() {
    
   let session_id =  localStorage.getItem("sessionID");

   if(session_id != '' || session_id != undefined ){

    PagSeguroDirectPayment.setSessionId(session_id);

    var promise = new Promise(function(resolve, reject) {

        PagSeguroDirectPayment.onSenderHashReady(function(response) {
            if (response.status == 'error') {
              const msg_error = {
                status: false,
                message: response.message
              };
              reject(msg_error);
            }
            const ret_pagseguro = {
              status: true,
              message: response.senderHash
            };
            resolve(ret_pagseguro);
          });

     });

     Promise.all([promise]).then(function(pagseguro) {
        if (!pagseguro[0].status) {
          error_message.innerText = pagseguro[0].message;
        } else {
          
        }
      });
 
   }

   
  }