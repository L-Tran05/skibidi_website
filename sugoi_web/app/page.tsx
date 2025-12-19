// landing page 
'use client'; 
import Link from "next/link";

export default function Page() {
    return(
        <>
            <div className = "Welcome-Fullscreen">  

            <header className = "welcomeHeader">
                Hallo Everyone! I'm Lena :3
            </header>

            <main className = "main-content">
                <div className = "image-container">
                    
                    <img
                    className= "persona-animation"
                    src = '/assests/temp.gif'
                    alt = "sprite of character"
                    />

                </div>

                <div className = "welcome-text">
                    Welcome &lt;3
                </div>

                <Link href="/Homepage">
                    <button className = "start"> Say Hi!! &lt;3</button>
                </Link>
            </main>
        </div>
        
        </>
    );
}