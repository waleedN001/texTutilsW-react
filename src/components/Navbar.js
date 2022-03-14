import React from 'react'

export default function Navbar(prop) {
  return (
    <div>
    <nav className= {`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{prop.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav text-Center me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{prop.abouttext}</a>
        </li>
        </ul>
        
      <form className="d-flex justify-content-start">
        <button type="button"  onClick={prop.toggleMode} className={`btn btn-${prop.mode==='light'?'dark':'light'} mx-2`}>changeMode</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}