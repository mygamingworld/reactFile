import React from "react";


const cardData1 = [
        {
        img : "./Image placeholder.png",
        title : "Product Design",
        des : "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        },
        {
            img : "./Image placeholder (1).png",
            title : "Art Direction",
            des : "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        },
        {
            img : "./Image placeholder (2).png",
            title : "Visual Design",
            des : "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        }
]


export const Section2 = () => {
    return(
    
        <section className="content-box">
            <div className="container">

                {
                    cardData1.map((item , index) => {
                        return (
                        <div className="box" id="deSign">
                            <img src={item.img} alt="" />

                            <h2>{item.title}</h2>

                            <p>{item.des}</p>
                        </div>

                        )
                    })
                }


            </div>
        </section>


    )
}