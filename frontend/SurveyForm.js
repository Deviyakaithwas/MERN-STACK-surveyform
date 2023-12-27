
function SurveyForm() {
  // ...form fields and state management

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/surveys/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.message);
      console.log('Server listening on port 3000');
     
    } catch (err) {
      console.error(err);
     
    }
  };

//   return({
  
// });
}

export default SurveyForm;
