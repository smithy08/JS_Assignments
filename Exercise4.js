testEmail='Cam@eron.smith@mastek.com'





function checkEmail(email){
    //check email has one and only one @
    let pattern = new RegExp(/^[^@]*@[^@]*$/);
    if (pattern.test(email)===false){
        console.log('Failed - More than 1 @')
        return false;
    }
    //console.log(pattern.test(email));

    //split personal part and domain
    parts=email.split('@');
    user=parts[0];
    domain=parts[1];

    //check user part to see if it adheres to the rules
    //check it only contains vaild characters
    pattern = new RegExp(/^[A-Za-z0-9!#$%&'*+-/ =?^._`{|}]+$/)
    if (pattern.test(user)===false){
        console.log('Failed - User part has invalid characters')
        return false;
    }
    
    //check if it contains a . it is not at the start or end and not 2 in a row
    //check two or more.. in a row
    pattern = new RegExp(/[.]{2,}/)
    if (pattern.test(user)===true){
        console.log('Failed - User part has two or more . in a row')
        return false;
    }
    
    //check if there is no . at the start or end of the user part
    if (user.charAt(0)==='.'|| user.charAt(-1)==='.'){
        console.log('Failed - User part has . at the start and/or end')
        return false;
    }
    
    //if it passed all tests the email is valid
    console.log('Valid email')
    return true;


}

checkEmail(testEmail)