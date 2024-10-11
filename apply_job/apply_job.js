function toggleEmployerFields(){
    const employedCheckbox=document.getElementById('employed');
    const employmentDetails=document.getElementById('employment_details');
    if(employedCheckbox.checked){
        employmentDetails.style.display='block';
    } 
    else{
        employmentDetails.style.display='none';
        document.getElementById('current_employer').value='';
        document.getElementById('years_of_exp').value='';
    }
}
document.getElementById('jobForm').addEventListener('submit',function(event){
    event.preventDefault();
    const firstName=document.getElementById('first_name').value;
    const lastName=document.getElementById('last_name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const address=document.getElementById('address').value;
    const city=document.getElementById('city').value;
    const state=document.getElementById('state').value;
    const zip=document.getElementById('zip').value;
    const country=document.getElementById('country').value;
    const eduLevel=document.getElementById('edu_level').value;
    const eduType=document.getElementById('edu_type').value;
    const resume=document.getElementById('resume').value;
    const jobs=document.getElementById('jobs').selectedOptions;
    if(!firstName||!lastName||!email||!phone||!address||!city||!state||!zip||!country||!eduLevel||!eduType||!resume||jobs.length===0){
        alert('Please fill out all required fields.');
        return;
    }
    alert('Successfully applied for the job!');
    document.getElementById('jobForm').reset();
})
