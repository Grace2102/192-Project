customerobjs = [];
//accesses the customer details and stores it into an array

function newcustomerdetails(){
  var objects = {};
  let name = document.getElementById("name");
  let address = document.getElementById("address");
  let bankno = document.getElementById("bankcardno");
  let email = document.getElementById("email");
  objects.custname = name;
  objects.custaddress = address;
  objects.custbank = bankno;
  objects.custemail = email; 
  customerobjs.push(objects);

}
