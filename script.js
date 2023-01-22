
function Validate() {
    const pass = document.getElementById('pass').value;
    const conpass = document.getElementById('conpass').value;

    if(pass !== conpass) {
        alert("Passwords do not match.");
        return false;
    }
    return true
}