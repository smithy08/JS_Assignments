testEmail='Cameron.smith@mastek.com'

function checkEmail(email){

    parts=email.split('@');
    user=parts[0];
    domain=parts[1];

    let chars = new RegExp('/[A-Za-z0-9_@./#&+-]+/')

    user.match(chars);

    console.log(user.match(chars));
    



}

checkEmail(testEmail)