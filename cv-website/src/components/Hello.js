import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const Hello = () => {
    return (<div className="hello">
        <div
        ><div data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            data-aos-once="true"><h1>Hello! </h1> <h2 style={ { "display": "flex", "alignItems": "center" } }> Keep scrolling down for more. <ArrowDownwardIcon /></h2></div>

            <h1 data-aos="fade-up"
                data-aos-offset="620"
                data-aos-delay="10"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                // data-aos-mirror="true"
                data-aos-once="true">My name is Sahim Bhaur.</h1>
            <h1 data-aos="fade-up"
                data-aos-offset="630"
                data-aos-delay="10"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                // data-aos-mirror="true"
                data-aos-once="true">I'm a software engineer.</h1></div>

    </div>)
}

export default Hello;