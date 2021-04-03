function requestHashPagSeguro(session_id, hash_input, error_message) {

    hash_input.value = "";
    error_message.innerText="";

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
        hash_input.value = pagseguro[0].message;
      }
    });
  };

 window.onload = function () {
    var form = document.getElementById('form_hash');
    var copy = document.getElementById('copy_hash');
    var session_input = document.getElementById('session');
    var error_message = document.getElementById('error_message');
    var hash_input = document.getElementById('hash');

    hash_input.disabled = true;


    form.addEventListener('submit', function(e) {
      if (session_input.value.length == 0) {
        error_message.innerText = "Insira um valor válido em Session ID!";
      } else {
        requestHashPagSeguro(session_input.value, hash_input, error_message);
      }
      e.preventDefault();
    });
