import React from "react";







export const Footer = () => {
    return(

            <footer className="content-box">
                <div className="container">

                            <div className="formBox">       
                                    <h2>Let's work together</h2>

                                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>

                                     <div id="icon">
                                        <img src="./discord.png" alt="" />
                                        <img src="./facebook.png" alt="" />
                                        <img src="./dribbble (1).png" alt="" />
                                        <img src="./nstagram.png" alt="" />
                                        <img src="./behance (1).png" alt="" />
                                     </div>
                            </div>
                            <div className="formBox">

                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Type your message" id="inpMsg" />
                                <button>Submit</button>

                            </div>


                </div>
            </footer>


    )
}   