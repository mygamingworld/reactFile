import React from "react";

const cardData2 = [
    {
        img : "./Image (1).png",
        title : "Free Bird",
        des : "Lynyrd Skynyrd"
    },
    {
        img : "./Image (2).png",
        title : "Purple Haze",
        des : "Jimmi Hendrix"
    },
    {
        img : "./Image (3).png",
        title : "You Really Got Me",
        des : "The Kinks"
    },] ;

const cardData3 = [
    {
        img : "./Image (4).png",
        title : "American Girl",
        des : "Tomm Pretty"
    },
    {
        img : "./Image (5).png",
        title : "Whole Lotta love",
        des : "Ledd Zapellin"
    },
    {
        img : "./Image (6).png",
        title : "Under Pressure",
        des : "Queen"
    },
]





export const Section3 = () => {
    return(

            <section className="content-box" id="WorkAddContainer">
                                <h2 id="heading001">My Letest Work</h2>

                        <div className="container" id="workAdd">

                            <div>

                            
                                {
                                    cardData2.map((item , index) => {
                                        return(
                                            <div className="box">
                                                        <img src={item.img} alt="" />

                                                        <h2>{item.title}</h2>

                                                        <p>{item.des}</p>
                                                </div>
                                        )
                                    })
                                }                           
                            </div>
                            <div>
                            
                            {
                                cardData3.map((item , index) => {
                                    return(
                                            <div className="box">
                                                    <img src={item.img} alt="" />

                                                    <h2>{item.title}</h2>

                                                    <p>{item.des}</p>
                                            </div>
                                    )
                                })
                            }                           
                        
                        
                        
                            </div>                                   
                            
                            </div>  
                            
            </section>

    );
}