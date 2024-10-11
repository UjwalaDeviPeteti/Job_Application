function create_job(event){
    event.preventDefault(); 
    const title=document.getElementById('title').value.trim();
    const type=document.getElementById('type').value;
    const dept=document.getElementById('dept').value;
    const country=document.getElementById('country').value;
    const desc=document.getElementById('desc').value.trim();
    const opdt=document.getElementById('opdt').value;
    const today=new Date().toISOString().split('T')[0]; 
    if(title===""){
        alert("Job Title is required.");
        return false;
    }
    if(type===""){
        alert("Job Type is required.");
        return false;
    }
    if(dept===""){
        alert("Department is required.");
        return false;
    }
    if(country==="") {
        alert("Country is required.");
        return false;
    }
    if(desc===""){
        alert("Job Description is required.");
        return false;
    }
    if(opdt===""){
        alert("Opening Date is required.");
        return false;
    }
    if(opdt>today){
        alert("Opening Date cannot be greater than today's date.");
        return false;
    }
    alert("Form successfully submitted!");
    document.getElementById('fi').reset();
}

