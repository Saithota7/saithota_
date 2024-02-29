import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleShowContent = () => {
        onToggleShowContent()
      }

      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-container">
          <h1 className="heading">Layout</h1>
          <ul className="unordered-configuration-container">
            <li className="list-item">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={toggleShowContent}
              />
              <label htmlFor="content" className="label-element">
                Content
              </label>
            </li>
            <li className="list-item">
              <input
                type="checkbox"
                id="left"
                checked={showLeftNavbar}
                onChange={toggleShowLeftNavbar}
              />
              <label htmlFor="left" className="label-element">
                Left Navbar
              </label>
            </li>
            <li className="list-item">
              <input
                type="checkbox"
                id="right"
                checked={showRightNavbar}
                onChange={toggleShowRightNavbar}
              />
              <label htmlFor="right" className="label-element">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
