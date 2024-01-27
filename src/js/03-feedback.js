const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveFormData = () => {
    const inputField = {
        email : emailInput.value,
        message: messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(inputField));
};

const loadFormData = () => {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      emailInput.value = parsedData.email;
      messageInput.value = parsedData.message;
    }
  };

const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const message = messageInput.value;
    console.log({ email, message });

    localStorage.removeItem("feedback-form-state");
    form.reset();
  };

 loadFormData();


form.addEventListener("input", _.throttle(saveFormData, 500));
form.addEventListener("submit", handleSubmit);


