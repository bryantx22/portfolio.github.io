import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const ExtLinks = () => {
  return (
    <div class="contain">
        <br></br>
          <a
            href="https://www.linkedin.com/in/anchi-xia-43a43b192/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon1"
            />
          </a>
          <a
            href="https://github.com/bryantx22"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon2"
            />
          </a>
          <a
            href="https://www.dropbox.com/s/jc1phay1yshumkr/Resume_Xia.pdf?dl=0"
            target="_blank"
            rel="noreferrer"
          > 
            <FontAwesomeIcon
              icon={faFile}
              color="#4d4d4e"
              className="anchor-icon3"
            />
          </a>
    </div>
  )
}

export default ExtLinks
