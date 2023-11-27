import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdClose } from "react-icons/md";

const Enquireform = () => {
  const [selectedDate, setSelectedDate] = useState(null);


  const form = useRef();

  const sendEmail = (e) => {
 // Get the current date
 const currentDate = new Date();
 const formattedDate = currentDate.toISOString().split('T')[0];

 // Set the current date to the "date" field in the form
 form.current.date.value = formattedDate;


    e.preventDefault();

    emailjs.sendForm('service_s6yscqg', 'template_ics9tb9', form.current, 'ctLMl35oWO-hYo21q')
      .then((result) => {
          console.log(result.text);
          console.log('message sent successfully');
      }, (error) => {
          console.log(error.text);
          console.log('message not-sent successfully');

      });
  };

const closeForm=()=>{
document.getElementById('formModule').classList.remove('togglemodel');
}


  return (
    <>
      <div className='form-model' id='formModule'>
<div className='form-body'>

<div className="form-header d-flex justify-content-between align-items-center">
<h4 className='default-font'>Admission Enquire Form</h4>
<MdClose className='icon' onClick={closeForm}/>
</div>
  <form ref={form} onSubmit={sendEmail}>

<div className='row'>

  <div className='col-md-4  pt-1 pb-1'>

  <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select Today's Date"
        className='form-control'
        name='date'
      />
  </div>

  <div className='col-md-4  pt-1 pb-1'>
 
  <input type="text" name="child_name" className='form-control' placeholder='Enter Child Name'/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>

  <input type="number" name="child_age" className='form-control' placeholder='Enter Child Age'/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>

<input type="number" name="dob_child" className='form-control' placeholder='Enter Child DOB'/>
</div>

  <div className='col-md-4  pt-1 pb-1'>

    <select class="form-control" id="sel1" name="class_admission">
      <option value="">Select Addmission for Class</option>
      <option value="PlayGroup">PlayGroup</option>
      <option value="Nursery">Nursery</option>
      <option value="Jr.Kg">Jr.Kg</option>
      <option value="Sr.Kg">Sr.Kg</option>
    </select>
  </div>


  <div className='col-md-4  pt-1 pb-1'>

  <input type="text" name="attended_class" className='form-control' placeholder='Enter Last School Attended'/>
  </div>

  <div className='col-md-12  pt-3 pb-1'>
<h5>Enter Parents or Spoon Contact information</h5>
  </div>


  <div className='col-md-4  pt-1 pb-1'>

  <input type="text" name="parent_name" className='form-control' placeholder='Enter Parent Name'/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>

  <input type="text" name="phone_no" className='form-control' placeholder='Enter Contact Number'/>
  </div>

  <div className='col-md-4 pt-1 pb-1'>
  
  <input type="text" name="email_id" className='form-control' placeholder='Enter your@gmail.com'/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>

  <input type="text" name="occupation" className='form-control' placeholder='Enter Your Occupation'/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>
 
  <input type="text" name="address" className='form-control' placeholder='Enter Your Address'/>
  </div>


  <div className='col-md-12 pt-4 pb-2'>
<h5>How do you get to know about blueberry?</h5>
  </div>

  <div className='col-md-6  pt-1 pb-1'>
  <label>I got to know from </label>
    <select class="form-control mt-2" id="sel1" name="know_from">
      <option value="">Select here ...</option>
      <option value="Leaflet">Leaflet</option>
      <option value="Facebook">Facebook</option>
      <option value="Website">Website</option>
      <option value="Poster">Poster</option>
      <option value="Family & Friends">Family & Friends</option>
    </select>
  </div>

  <div className='col-md-12 pt-2 pb-4'>
  <label>Feedback, if any :</label>
      <textarea name="feedback" className='form-control mt-2' placeholder='Enter your feedback here ...'/>
  </div>

<div className='d-flex justify-content-lg-start gap-3'>
<input type="submit" value="Send" className="btn btn-primary default-font" style={{width:"120px", fontWeight:"500"}}/>
<input type="button" value="Cancel" className="btn btn-danger default-font" style={{width:"120px", fontWeight:"500"}} onClick={closeForm}/>
</div>

</div>
    

    
      
  

  
  

   
      
 

   
      



      
   

     
   

    
   

   

  
</form>
</div>


      </div>
    </>
  )
}

export default Enquireform
