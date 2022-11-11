import './projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            link: "https://github.com/shreya664/R3ND3R",
            // background: "protege.jpg",
            background: "bg1",
            category: "Python Project",
            title:"R3ND3R",
            subtitle: "Molding and Handling multidimensional supershapes",
            tech: [
                "flutter.png",
            ]
        },
        {
            link: "https://github.com/shreya664/webdev1",
            // background: "medistat.jpg",
            background: "bg2",
            category: "Fullstack Development Project",
            title: "Improved Restaurant Systems",
            subtitle: "Login, booking, oredering, billing, etc. facilities automated in one package.",
            tech:[
                "reactjs.png",
                "firebase.png",
                "google maps.png",
                "gcp.png",
                "html.jpg",
                "css.jpg",
                "js.jpeg"
            ]
        },
        
        {
            link: "https://github.com/shreya664/Guess-the-color",
            // background: "gtc2.jpeg",
            background: "bg3",
            category: "JavaScipt Game",
            title: "Guess the Color",
            subtitle: "Fun Game to match RGB Code",
            tech:[
                "html.jpg",
                "css.jpg",
                "js.jpeg"
            ]
        },

        {
            link: "https://github.com/shreya664/RollBall",
                // background: "waste.jpg",
            background: "bg4",
            category: "Web Portal",
            title: "RollBall",
            subtitle: "A console game developed in python",
            tech:[
                "flutter.jpg"
              ]
        },

    ]

    return (
        <div id="project-sec">
            <div>
                <p className="heading sec">Featured <strong>Projects</strong></p>
            </div>

            
            <div className="card-grid">
                <ProjectCard info={projects} />
            </div>
        </div>
    )
}

export default Projects