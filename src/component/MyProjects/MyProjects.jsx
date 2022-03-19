import React from 'react'
import './style/MyProjects.css'

function MyProjects() {
  return (
    <div className='my-project-wrapper'>
      <h1 className='project-title'>Projects!</h1>
      <div className='my-project-container'>
        <div className='project-cards flex-project-cards-1'>
          <div className='project-card-title'>
            <h1>GOBLIN CAMP</h1>
          </div>
          <div className='project-card-body'>
            <svg className='icon-project-1' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M108.777 256.058c.286 56.565 13.983 101.827 24.942 133.585C85.56 317.753 30.9 187.787 120.5 112.147c-42.56-4.31-92.374 25.796-95.78 71.213h-.19c-1.068 14.052 2.58 29.756 11.746 46.133C16.312 284.78 15.33 345.708 49.6 433.393c19.18 49.048 70.854 62.702 120.752 53.94 36.346-6.4 70.19-22.667 93.294-59.754 40.158-64.48 59.99-105.418 101.79-135.42 46.526-19.777 97.54-3.25 123.88 22.454-7.476-57.55-70.396-111.51-120.465-56.763-41.325 7.66-69.025 17.52-115.722 51.235 19.65-38.758 56.327-84.913 79.13-112.415 33.693-41.608 102.853-56.82 138.524-48.106-31.99-45.34-127.917-59.59-149.615 12.53-42.008 19.263-94.897 60.85-129.908 102.997 11.58-52.748 33.18-117.786 54.347-155.208 33.825-36.553 83.77-35.932 114.623-26.564-28.904-46.596-121.244-70.12-138.495 12.993-43.11 33.08-87.248 100.11-112.956 160.748z"></path></svg>            
            <h2 className='border-above-tech'>Technologies</h2>
            <p>Java Script, React, Scss, Html, Toastify, Firebase, Firestore, Router, JSX</p>
            <h2>Descriptions</h2>
            <p>
              The Goblin Camp is a site that allows its TTRPG players to find one another for digital
              games. People play games together all over the world but with a wealth of different
              places to play, finding your players on that single platform is limited. The Goblin Camp
              allows you to search and filter players based on how they want to play their games via a
              variety of different criteria, regardless of whether they normally play on Roll20, Discord, 
              Fantasy Grounds, or anywhere else. You can find someone who wants to play Wrath and
              Glory in a combat heavy game or find someone who wants to play a role play heavy game of 
              Starfinder. All your potential gaming partners in one place. 
            </p>
          </div>
          <div className='project-card-footer'>
            {/* <a href="https://github.com/TBuscemi/" target='_blank'><i class="fa-brands fa-github fab"></i></a> */}
            <a href='https://the-goblin-camp.web.app/' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-window-fullscreen fab" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className='project-cards'>
          <div className='project-card-title'>
            <h1>Dice Roller</h1>
          </div>
          <div className='project-card-body'>
          <svg className='icon-project-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 512"><path d="M447.1 224c0-12.56-4.781-25.13-14.35-34.76l-174.9-174.9C249.1 4.786 236.5 0 223.1 0C211.4 0 198.9 4.786 189.2 14.35L14.35 189.2C4.783 198.9-.0011 211.4-.0011 223.1c0 12.56 4.785 25.17 14.35 34.8l174.9 174.9c9.625 9.562 22.19 14.35 34.75 14.35s25.13-4.783 34.75-14.35l174.9-174.9C443.2 249.1 447.1 236.6 447.1 224zM96 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S120 210.8 120 224S109.3 248 96 248zM224 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 376 224 376zM224 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S248 210.8 248 224S237.3 248 224 248zM224 120c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 120 224 120zM352 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S365.3 248 352 248zM591.1 192l-118.7 0c4.418 10.27 6.604 21.25 6.604 32.23c0 20.7-7.865 41.38-23.63 57.14l-136.2 136.2v46.37C320 490.5 341.5 512 368 512h223.1c26.5 0 47.1-21.5 47.1-47.1V240C639.1 213.5 618.5 192 591.1 192zM479.1 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S493.2 376 479.1 376z"/></svg>
            <h2 className='border-above-tech'>Technologies</h2>
            <p>Kotlin, Android Studio, Phone Emulator </p>
            <h2>Descriptions</h2>
            <p>
              An app that when you click the button it will roll the dice and a random side will show up
              between 1-6
            </p>
          </div>
          <div className='project-card-footer'>
            <a href="https://github.com/TBuscemi/DiceRollerKotlin" target='_blank'><i class="fa-brands fa-github fab"></i></a>
            {/* <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-window-fullscreen fab" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
            </a> */}
          </div>
        </div>
        <div className='project-cards'>
          <div className='project-card-title'>
            <h1>Trash Collector</h1>
          </div>
          <div className='project-card-body'>
          <svg className='icon-project-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>
            <h2 className='border-above-tech'>Technologies</h2>
            <p>Python, Django, Postman, HTML, CSS, Bootstrap</p>
            <h2>Descriptions</h2>
            <p>
              Developed a web application to allow users to setup trash collection days and specify additional trash collection dates. Trash collectors can view the dates users have selected
              and improve efficiency of routes.
            </p>
          </div>
          <div className='project-card-footer'>
            <a href="https://github.com/giuseppe-g-gelardi/Django_Trash_collector" target='_blank'><i class="fa-brands fa-github fab"></i></a>
            {/* <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-window-fullscreen fab" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
            </a> */}
          </div>
        </div>
        <div className='project-cards'>
          <div className='project-card-title'>
            <h1>Animations</h1>
          </div>
          <div className='project-card-body'>
          <svg className='icon-project-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0h-288c-26.51 0-48 21.49-48 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-416C384 21.49 362.5 0 336 0zM192 128c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 227.3 128 192S156.7 128 192 128zM288 384H96c-8.836 0-16-7.164-16-16C80 323.8 115.8 288 160 288h64c44.18 0 80 35.82 80 80C304 376.8 296.8 384 288 384z"/></svg>
            <h2 className='border-above-tech'>Technologies</h2>
            <p>Java script, Html, Css</p>
            <h2>Descriptions</h2>
            <p> This was an older version of my portfolio where i like to put my test animations before 
              bring them into a project.If you compare my old portfolio to this one you can see how far 
              along i have come when it comes to styling and responsive design and animations.
            </p>
          </div>
          <div className='project-card-footer'>
            <a href="https://github.com/TBuscemi/TBuscemi.github.io" target='_blank'><i class="fa-brands fa-github fab"></i></a>
            <a href='https://tbuscemi.github.io/' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-window-fullscreen fab" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects