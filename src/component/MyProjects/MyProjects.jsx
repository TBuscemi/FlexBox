import React from 'react'
import './style/MyProjects.css'

function MyProjects() {
  return (
    <div className='my-project-wrapper'>
      <div className='my-project-container'>
        <div className='project-cards'>
          <div className='project-card-title'>
            <h1>TITLE</h1>
          </div>
          <div className='project-card-body'>
          <svg className='icon-project' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M108.777 256.058c.286 56.565 13.983 101.827 24.942 133.585C85.56 317.753 30.9 187.787 120.5 112.147c-42.56-4.31-92.374 25.796-95.78 71.213h-.19c-1.068 14.052 2.58 29.756 11.746 46.133C16.312 284.78 15.33 345.708 49.6 433.393c19.18 49.048 70.854 62.702 120.752 53.94 36.346-6.4 70.19-22.667 93.294-59.754 40.158-64.48 59.99-105.418 101.79-135.42 46.526-19.777 97.54-3.25 123.88 22.454-7.476-57.55-70.396-111.51-120.465-56.763-41.325 7.66-69.025 17.52-115.722 51.235 19.65-38.758 56.327-84.913 79.13-112.415 33.693-41.608 102.853-56.82 138.524-48.106-31.99-45.34-127.917-59.59-149.615 12.53-42.008 19.263-94.897 60.85-129.908 102.997 11.58-52.748 33.18-117.786 54.347-155.208 33.825-36.553 83.77-35.932 114.623-26.564-28.904-46.596-121.244-70.12-138.495 12.993-43.11 33.08-87.248 100.11-112.956 160.748z"></path></svg>            
          <p>tech</p>
          <p>des</p>
          </div>
          <div className='project-card-footer'>
            <h1>footer</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects