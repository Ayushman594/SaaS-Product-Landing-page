import "./Styles/Form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

  const displayMessage = () => {
    alert("you have Registered successfully !");
  };

  return (
    <>
    {/* Back Button Code*/}
      <div className="backbutton p-2">
        <button
          className="btn btn-info text-light"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Form Section */}
      <section className="form-container">
        <form
          onSubmit={handleSubmit(displayMessage)}
          className="border border-dark rounded p-4 "
        >
          <h3 className="text-center">TaskFlow Registration</h3>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="Name" className="mb-3">
              Enter Name:
            </label>
            <input
              type="text"
              id="Name"
              className="form-control"
              {...register("name", {
                required: "This field is mandatory",
                pattern: {
                  value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                  message: "Only Alphabet letters are allowed in Name",
                },
              })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="email" className="mb-3">
              Enter Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", {
                required: "This field is mandatory",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="phoneno" className="mb-3">
              Enter Mobile number:
            </label>
            <input
              type="text"
              id="phoneno"
              className="form-control"
              {...register("phoneno", {
                required: "This field is mandatory",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please Enter a valid ten digits number",
                },
              })}
            />
            {errors.phoneno && (
              <p className="text-danger">{errors.phoneno.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="email" className="mb-3">
              Enter Password:
            </label>
            <div className="d-flex">
              <input
                type={togglePassword ? "text" : "password"}
                className="form-control w-75"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Must be 8+ characters with uppercase, lowercase, number, and special character",
                  },
                })}
              />
              <button
                type="button"
                className="toggle-button"
                onClick={() => setTogglePassword(!togglePassword)}
              >
                {togglePassword ? "👁️" : "⌣"}
              </button>
            </div>
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-4">
            <label className="mb-3">Confirm Password</label>
            <div className="d-flex">
              <input
                type={toggleConfirmPassword ? "text" : "password"}
                className="form-control w-75"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                className="toggle-button"
                onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
              >
                {toggleConfirmPassword ? "👁️" : "⌣"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
