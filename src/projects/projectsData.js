import projectOne from "../assets/mydormstore_image.png";
import projectTwo from "../assets/planetze.png";
import projectThree from "../assets/personal.png";

const projects = {
    1: {
        title: "MyDormStore Web Page",
        image: projectOne,
        description: (
        <>
        <p>
        A web platform that helps college students moving into dorms shop for essential items with personalized checklists and curated product bundles.
        </p>
        </>
        ),
        github: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-c01s25-project-my-dormstore",
        demo: "https://youtu.be/-XxJuKaANcw",
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
        title: "Personal Website",
        image: projectThree,
        description: (
        <>
        <p>
            This is my personal portfolio site, designed and built from scratch to showcase my projects, experiences, and interests in tech, business, and design. It reflects my passion for clean UI, thoughtful UX, and responsive development.
        </p>
        </>
        ),
        github: "https://github.com",
        demo: "https://myywebsitee.netlify.app/",
    },
};

export default projects;
