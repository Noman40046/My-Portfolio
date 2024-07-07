 import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">

          <div className="text-center lg:text-left">
           <img className="logimg" src="../../public/login.png" alt="" />
          </div>

          <div className="card shrink-0 w-full max-w-lg main-form bg-base-100">
            <form  className="card-body">
             
              <div className="form-control">
                <textarea
                  type="text"
                  placeholder="type your messege"
                  className="input input-bordered w-[450px] h-72 py-2"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn loginbtn text-white text-lg">Send Messege</button>
              </div>

            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;

