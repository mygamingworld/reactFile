import Ract from "react";

const navData = ["Home", "About", "Setting", "Blog", "Contact-US"];

export const Navbar = () => {
    return(
        <nav>

          
                    <img src="https://www.svgrepo.com/show/303151/slack-logo.svg" alt="" />


    <div id="link1">
          

                <ul>
                       {navData.map((item, index) => {
                              return(
                                <li>{item}</li>
                            )
                        })}

        </ul>
    
    </div>   
    <div id="link">
            
        <ul>
            {navData.map((item, index) => {
                return(
                    <li>{item}</li>
                )
            })}

        </ul>

    </div>
    
    </nav>
        

    )
}