var validations = {
  required: function(value){
    return value !== '';
  },
  email: function(value){
    return value.match(/^[a-zA-Z][\w\-_]+@[\w\d\.\-\_]+[\.]+\w{2,3}$/);
  }
}
function validate() {
  var form = document.getElementById('form'),
      inputsArr = form.querySelectorAll('input'),
      errorMessage = document.querySelector(".message_error"),
      successMessage = document.querySelector(".message_success");
  
  form.addEventListener('submit', function(e){
    var i = 0;
    while (i < inputsArr.length) {
      var attr = inputsArr[i].getAttribute('data-validation'),
          rules = attr ? attr.split(' ') : '',
          j = 0;
      while (j < rules.length) {
        if(!validations[rules[j]](inputsArr[i].value)) {
          e.preventDefault();
          errorMessage.className = "message message_error";
          errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
          inputsArr[i].className = "field_error";
          return false;
        }
        errorMessage.className = "message message_error hidden";
        inputsArr[i].className = "";
        j++;
      }
      i++;
    }
    e.preventDefault();
    successMessage.className = "message message_success";
  }, false)
}
validate();
