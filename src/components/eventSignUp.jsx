import { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";

class EventSignUp extends Component {
  render() {
    return (
      <Modal>
        <div className="bg-grey-lighter flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center text-vb">
                Sign up for a event
              </h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <button className="w-full text-center py-3 rounded bg-vg text-white my-1">
                Sign up
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Changed your mind?
              <Link
                className="no-underline border-b border-blue text-blue"
                to="/"
              >
                Go back
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
export default EventSignUp;
