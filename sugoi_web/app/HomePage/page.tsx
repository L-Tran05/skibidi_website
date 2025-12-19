// home page of the about me
'use client'; 

export default function Home(){
    return(
        <>
            <div className = "HomePage-Full">
                <main className = "Home-Content">
                    <div className = "hero-image">
                        <img className = "hero-img"/>
                    </div>

                <div className = "Welcome-home">
                    Welcome to my Website! :3
                </div>

                <div className = "button-art">
                    Art Works
                </div>

                <div className = "Projects-button">
                    Projects + Experience
                </div>

                <div className = "AnotherHero-Img">
                    <img className = "who_am_I">
                    </img>
                </div>

                <div className = "AboutMe">
                    About Me
                </div>

                <div className = "aboutMeText">
                Hello everyone, my name is Lena, a Vietnamese-American artist!

                I am currently a third year at the University of Central Florida studying a degree in Information Technology with a minor in Digital Media. I’m involved in many clubs such as Knight Hacks as a design team member, Girls Who Code, and UCF Art Club.

                I love illustration and art of all sorts! When I’m not doing school work, I am learning to animate or selling prints and merch! I wanna get better at UX/UI design and I love learning and experiencing new things!
                </div>

                <div className = "secret-arg-comment box">
                    textbox that will simply send a thank you if people put anything, unless it is the word "Jing Yuan" exactly (these words will be found throughout my website to be found by control A as they will be hidden)
                </div>

                </main>

            </div>
        </>
    )
}