function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  var latInput = parseInt(document.getElementById('latInput').value);
  var longInput = parseInt(document.getElementById('longInput').value);
  var valid = true;

if(!(longInput > -180 && longInput < 180))
{
document.getElementById('longText').textContent = "  Must be a Valid longitude (-180 to 180)";
document.getElementById('longText').style.color = "red";
valid = false;
  console.log('bye');
}
  if(!(latInput > -90 && latInput < 90))
  {
    var latText =document.getElementById('latText');
    latText.textContent = "  Must be a Valid latitude (-90 to 90)";
    latText.style.color = "red";
    valid = false;
  }
  return valid;
}


// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
