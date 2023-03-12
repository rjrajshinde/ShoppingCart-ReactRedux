import React, { useEffect, useState } from "react";
import "../css/Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  // const handleClick = (event) => {
  //   setIsActive((current) => !current);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  useEffect(() => {
    alert("Use any EMAIL and PASSWORD to LOGIN");
  }, []);

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half">
                <form
                  className="box has-background-grey-lighter"
                  action="/"
                  onSubmit={handleSubmit}
                >
                  <div className="titlediv">
                    <p className="subtitle is-3 has-text-weight-bold">LOGIN</p>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="********"
                      ></input>
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={
                      isActive
                        ? "button is-medium is-dark is-fullwidth is-loading"
                        : "button is-medium is-dark is-fullwidth"
                    }
                    onSubmit={setIsActive}
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
