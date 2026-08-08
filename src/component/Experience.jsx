import React from 'react';
import html from "../../public/htmlim.png"
import css from "../../public/cssim.png"
import java from "../../public/javam.png"
import javascript from "../../public/jsin.jpeg"
import oracle from "../../public/oracim.jpeg"

import spring from "../../public/sprim.png"
import springboot from "../../public/spbim.png"

function Experience() {
    const cardItem=[
       {
      id: 1,
      logo: html,
      name: "Html"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
    {
      id: 3,
      logo: java,
      name: "Java"
    },
    {
      id: 4,
      logo: javascript,
      name: "Javascript"
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle"
    },
    {
      id: 6,
      logo: spring,
      name: "Spring"
    },
    {
      id: 7,
      logo: springboot,
      name: "SpringBoot"
    },
  ];

    
  return (
    <div name="Experience" 
    className="max-w-screen-2xl container mx-auto md:px-20 mt-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <p className=" ">I am beginer in web development,and i work on it.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3"> 
                {
                    cardItem.map(({id,logo,name}) =>(
                        <div className="flex flex-col items-center justify-center border-[2px] rounded-full  md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300" key={id}>
                            <img src={logo} className="w-[150px] rounded-full" alt=""/>
                            <div>
                                <div className="">
                                    {name}
                                </div>
                               
                            </div>
                            

                        </div>
                    )
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Experience
