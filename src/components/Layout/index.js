import './index.css'
import pfp from './pfp.jpg'
import {MovingComponent} from 'react-moving-text'
import ExtLinks from '../ExtLinks';
import Navigation from '../Navigation';

function Layout () {
    return (
      <div>
        <Navigation />
        <div class="grid-container">
          <div class="grid-item1"> 
            <img class="pfp" src={pfp} alt="pfp"/>
          </div>
          <div class="grid-item2"> 
              <MovingComponent
                  type="slideInFromBottom"
                  duration="1500ms"
                  delay="0s"
                  direction="normal"
                  timing="linear"
                  iteration="1"
                  fillMode="none">
                  <h1> Welcome, </h1>
              </MovingComponent>              
              <p>
                My name is Anchi Xia (<it>夏安驰</it>) and I go by Bryant. Currently, I am a rising sophmore
                at MIT majoring in maths and economics. Here you can find my research work, personal 
                projects, and more. Stay tuned.
              </p>
              <ExtLinks />
          </div>
        </div>
      </div>
    );
}

export default Layout