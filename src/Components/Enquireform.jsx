import React, { useRef, useState, useEffect  } from 'react';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdClose } from "react-icons/md";
import SuccessMessage from './SuccessMessage';

// import AOS from 'aos'
// import 'aos/dist/aos.css';

const Enquireform = () => {
//   useEffect(()=>{

//     AOS.init({duration:2000})
// },[])

  const [selectedDate, setSelectedDate] = useState(null);


  const form = useRef();

  const sendEmail = (e) => {
 // Get the current date
 const currentDate = new Date();
 const formattedDate = currentDate.toISOString().split('T')[0];

 // Set the current date to the "date" field in the form
 form.current.date.value = formattedDate;


    e.preventDefault();

    emailjs.sendForm('service_o2d6q4m', 'template_d57ei2q', form.current, '1mYe-safAz0MXHu6Y')
      .then((result) => {
          console.log(result.text);
          console.log('message sent successfully');
          document.getElementById('successmsg').classList.add('showmessage');

          // Clear form inputs
          form.current.reset();

          setTimeout(() => {
            document.getElementById('successmsg').classList.remove('showmessage');
document.getElementById('formModule').classList.remove('togglemodel');
          }, 3000);



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

  <div className='col-md-4  pt-1 pb-1' style={{display:"none"}}>

  <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select Today's Date"
        className='form-control'
        name='date'
      />
  </div>

  <div className='col-md-4  pt-1 pb-1'>
 
  <input type="text" name="child_name" className='form-control' placeholder='Enter Child Name' required/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>

  <input type="number" name="child_age" className='form-control' placeholder='Enter Child Age' required/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>
  <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select Child DOB"
        className='form-control'
        name='dob_child'
        required
      />
{/* <input type="number" name="dob_child" className='form-control' placeholder='Enter Child DOB'/> */}
</div>

  <div className='col-md-6  pt-1 pb-1'>

    <select class="form-control" id="sel1" name="class_admission" required>
      <option value="">Select Addmission for Class</option>
      <option value="PlayGroup">PlayGroup</option>
      <option value="Nursery">Nursery</option>
      <option value="Jr.Kg">Jr.Kg</option>
      <option value="Sr.Kg">Sr.Kg</option>
    </select>
  </div>


  <div className='col-md-6  pt-1 pb-1'>

  <input type="text" name="attended_class" className='form-control' placeholder='Enter Last School Attended' required/>
  </div>

  <div className='col-md-12  pt-3 pb-1'>
<h5>Enter Parents or Spoon Contact information</h5>
  </div>


  <div className='col-md-4  pt-1 pb-1'>

  <input type="text" name="parent_name" className='form-control' placeholder='Enter Parent Name' required/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>

  <input type="text" name="phone_no" className='form-control' placeholder='Enter Contact Number' required/>
  </div>

  <div className='col-md-4 pt-1 pb-1'>
  
  <input type="text" name="email_id" className='form-control' placeholder='Enter your@gmail.com' required/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>

  <input type="text" name="occupation" className='form-control' placeholder='Enter Your Occupation' required/>
  </div>

  <div className='col-md-4  pt-1 pb-1'>
 
  <input type="text" name="address" className='form-control' placeholder='Enter Your Address' required/>
  </div>


  <div className='col-md-12 pt-4 pb-2'>
<h5>How do you get to know about blueberry?</h5>
  </div>

  <div className='col-md-6  pt-1 pb-1'>
  <label>I got to know from </label>
    <select class="form-control mt-2" id="sel1" name="know_from" required>
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
<SuccessMessage/>
    </>
  )
}

export default Enquireform;
