import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1: {
        title: "My Dorm Store Web Page",
        image: projectOne,
        description: (
        <>
        <p>
        The Eco Tracker App is an Android-based application that allows users to monitor their daily carbon emissions in real time 
        by logging activities like transportation and energy use.

        </p>
        </>
        ),
        github: "https://github.com/Ashleylinn/Plantze",
        demo: "https://www.youtube.com/watch?v=NvV1t4W2EIM&ab_channel=AshleyLin",
    },
    2: {
        title: "Eco Tracker App",
        image: projectTwo,
        description: (
        <>
        <p>
        The Eco Tracker App is an Android-based application that allows users to monitor their daily carbon emissions in real time 
        by logging activities like transportation and energy use.
        </p>
        </>
        ),
        github: "https://github.com/Ashleylinn/Plantze",
        demo: "https://www.youtube.com/watch?v=NvV1t4W2EIM&ab_channel=AshleyLin",
    },
    3: {
        title: "THISTHAT APP",
        image: projectThree,
        description: (
        <>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
};

export default projects;
