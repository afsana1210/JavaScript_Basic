var person={first_name:'abc',last_name:'pqr',age:18,eyecolor:'grey'}
console.log(person.first_name);
console.log(person['first_name'])

var student={
    fname:'john',
    lname:'smith',
    rno:20,
    full_name: function(){
        console.log(this.fname+ " "+this.lname);
    }
};
student.full_name();
