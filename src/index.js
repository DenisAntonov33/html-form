const validations = {
  required: function(value){
    return value !== '';
  },
  email: function(value){
    return value.match(/^[a-z][\w\-_]+@[\w\d\.\-\_]+[\.]+\w{2,3}$/i);
  }
}
function validate() {
  const form = document.getElementById('form'),
      inputsArr = form.querySelectorAll('[data-validation]'),
      errorMessage = document.querySelector(".message_error"),
      successMessage = document.querySelector(".message_success");

  form.addEventListener('submit', function(e){

    for (let i = 0; i < inputsArr.length; i++) {

      let attr = inputsArr[i].getAttribute('data-validation'),
          rules = attr ? attr.split(' ') : '';

      for (let j = 0; j < rules.length; j++) {

        if(!validations[rules[j]](inputsArr[i].value)) {
          e.preventDefault();
          errorMessage.className = "message message_error";
          errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
          inputsArr[i].className = "field_error";
          return false;
        }
        errorMessage.className = "message message_error hidden";
        inputsArr[i].className = "";
      }
    }
    e.preventDefault();
    successMessage.className = "message message_success";
  })
}
validate();
