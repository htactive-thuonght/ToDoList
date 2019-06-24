var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
console.log(s.length);



let makeId = (length)=> {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
       console.log(Math.floor(Math.random() * charactersLength));
       console.log(characters.charAt(Math.floor(Math.random() * charactersLength)));
       
    }
    return result;
 }
 
 console.log(makeId(10));

 let makeid = length => {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var a= new Date().valueOf()
    for (let i = 0; i < length; i++) {
      var random = Math.floor( a*Math.random() * charactersLength); //floor để làm tròn
      result += characters.charAt(random);// charAt để trả về kí tự of chuỗi
     
    }
    return result;
  };
  
  console.log(makeid(10),"hkxah");
  console.log(new Date().valueOf());
  Math.floor(new Date().valueOf() * Math.random())