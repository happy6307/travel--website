function calculateAge()
{
    const dob= document.getElementById('DOB').value;
    if(dob){
        const bd=new Date(dob);
        const today=new Date();

        let age= today.getFullYear()-bd.getFullYear();

        const monthdiff=today.getMonth()-bd.getMonth();

        if(monthdiff<0||(monthdiff===0 && today.getDate()<bd.getDate())){
            age--;
        }
        document.getElementById('age').value=age;
    }
    else{
        document.getElementById('age').value=' ';
    }
}