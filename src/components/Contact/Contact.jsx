import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  let newsInfo = JSON.parse(localStorage.getItem("NOTICIA")) || [];
  const saveData = () => {
    newsInfo.push(data);
    localStorage.setItem("NOTICIA", JSON.stringify(newsInfo));
  };
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState("");

  const initialState = {
    name: "",
    email: "",
    text: "",
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.name.length < 2) {
      setMessage("Name must be at least 3 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    setBtnDisabled(true);
    event.preventDefault();
    saveData();
    console.log(
      "sending data..." + data.name + " " + data.email + " " + data.text + " "
    );

    clearState();
  };

  return (
    <>
      <div className="container container-main-contact">
        <h2 class="form-title">Informar de Una Noticia de Ayer</h2>
        <div className="container container-form mt-5 border border-3 rounded p-5">
          <form onSubmit={handleSubmit}>
            <div class="form-outline mb-4">
              <input
                type="text"
                placeholder="tu nombre..."
                onChange={handleInputChange}
                name="name"
                id="form4Example1"
                class="form-control"
                value={data.name}
              />
              <label class="form-label" for="form4Example1">
                Name
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="email"
                placeholder="tu email aqui..."
                onChange={handleInputChange}
                name="email"
                id="form4Example2"
                class="form-control"
                value={data.email}
              />
              <label class="form-label" for="form4Example2">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <textarea
                placeholder="cuentanos algo..."
                onChange={handleInputChange}
                name="text"
                class="form-control"
                id="form4Example3"
                rows="4"
                value={data.text}
              ></textarea>
              <label class="form-label" for="form4Example3">
                Message
              </label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form4Example4"
                checked
              />
              <label class="form-check-label" for="form4Example4">
                Enviame Una copia del mensaje
              </label>
            </div>

            <button
              type="submit"
              disabled={btnDisabled}
              class="btn btn-primary btn-block mb-5"
            >
              Send
            </button>

            <span class="message">{message}</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
