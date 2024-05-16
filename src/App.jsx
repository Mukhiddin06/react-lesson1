import './App.css'
import john from './assets/Ellipse 1.png'
import design from './assets/Rectangle 30.png'
import vibrant from './assets/Rectangle 32.png'
import day from './assets/Rectangle 34.png'
import fb from './assets/fb.svg'
import inst from './assets/insta.svg'
import group from './assets/Group.svg'
import Linke from './assets/Linkedin.svg'
import menu from './assets/menu.svg'
function App(){
  return(
    <>
    <header className="site-header">
      <div className="container">
        <div className="header">
          <ul className="header-list">
            <li className="header-item"><a href="#" className="header-link">Works</a></li>
            <li className="header-item"><a href="#" className="header-link">Blog</a></li>
            <li className="header-item"><a href="#" className="header-link">Contact</a></li>
          </ul>
          <img src={menu} alt="menu" className="header-img" width={30} height={18}/>
        </div>
      </div>
    </header>
    <main className="site-main">
      <section className="hero-section">
        <div className="container">
          <div className="hero">
            <div className="hero-content-wrapper">
              <h2 className="hero-title">Hi, I am John, Creative Technologist</h2>
              <p className="hero-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <a href="#" className="hero-link">Download Resume</a>
            </div>
            <div className="hero-img-wrapper"><img src={john} alt="John" className="hero-img" width={243} height={243}/></div>
          </div>
        </div>
      </section>
      <section className="post-section">
        <div className="container">
          <div className="post">
            <div className="recent">
              <h3 className="recent-title">Recent posts</h3>
              <a href="#" className="recent-link">View all</a>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <h3 className="card-title">Making a design system from scratch</h3>
                <p className="card-time">12 Feb 2020 <strong className="card-about">Design, Pattern</strong></p>
                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              <div className="card">
                <h3 className="card-title">Creating pixel perfect icons in Figma</h3>
                <p className="card-time">12 Feb 2020 <strong className="card-about">Figma, Icon Design</strong></p>
                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section">
        <div className="container">
          <div className="work">
            <h3 className="work-title">Featured works</h3>
            <div className="work-item">
              <img src={design} alt="design" className="work-img"  width={246} height={180}/>
              <div className="work-wrapper">
                <h3 className="worc-title">Designing Dashboards</h3>
                <p className="work-about"><strong className="work-time">2020</strong> Dashboard</p>
                <p className="work-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            <div className="work-item">
              <img src={vibrant} alt="vibrant" className="work-img"  width={246} height={180}/>
              <div className="work-wrapper">
                <h3 className="worc-title">Vibrant Portraits of 2020</h3>
                <p className="work-about"><strong className="work-time">2018</strong> Illustration</p>
                <p className="work-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            <div className="work-item">
              <img src={day} alt="day" className="work-img"  width={246} height={180}/>
              <div className="work-wrapper">
                <h3 className="worc-title">36 Days of Malayalam type</h3>
                <p className="work-about"><strong className="work-time">2018</strong> Typography</p>
                <p className="work-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="container">
        <div className="footer">
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-link"><img className="footer-img" src={fb} alt="img" width={35} height={35}/></a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link"><img className="footer-img" src={inst} alt="img" width={35} height={35}/></a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link"><img className="footer-img" src={group} alt="img" width={35} height={35}/></a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link"><img className="footer-img" src={Linke} alt="img" width={35} height={35}/></a>
            </li>
          </ul>
        </div>
        <p className="footer-text">Copyright ©2020 All rights reserved </p>
      </div>
    </footer>
    </>
  )
}
export default App
