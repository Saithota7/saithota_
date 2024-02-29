import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="unordered-container-1">
                <li className="left-navbar-list-item para">Item 1</li>
                <li className="left-navbar-list-item para">Item 2</li>
                <li className="left-navbar-list-item para">Item 3</li>
                <li className="left-navbar-list-item para">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="left-navbar-heading">Content</h1>
              <p className="para para-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="left-navbar-heading">Right Navbar Menu</h1>
              <ul className="unordered-container-1">
                <li className="right-navbar-list-item para">Ad 1</li>
                <li className="right-navbar-list-item para">Ad 2</li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
