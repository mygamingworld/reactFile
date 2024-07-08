import React from "react";


const cardData3 = [
    {
        img : "./Author images (1).png",
        data : "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        title : "Gamma Nolen Google",
    },
    {
        img : "./Author images (2).png",
        data : "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        title : "Gamma Nolen Google",
    },
    {
        img : "./Author images.png",
        data : "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        title : "Gamma Nolen Google",
    },
]





export const Section4 = () => {
    return(
        <section className="content-box">
                    <h2>My Clients</h2>

                <div className="container">

                    {
                        cardData3.map((item, index) => {

                            return(
                            <div className="clientCard">

                                <h3>{item.data}</h3>
                                <div>
                                        <img src={item.img} alt="" />

                                        <h2>{item.title}</h2>
                                </div>

                            </div>

                            )
                        })
                    }

                </div>

        </section>
    )
}