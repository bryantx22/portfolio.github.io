import './index.css'
import Navigation from '../../components/Navigation';
import {MovingComponent} from 'react-moving-text'
import Post from '../../components/Post';
// import { Canvas } from '@react-three/fiber'
// import Box from '../../components/Box';

function Blog () {
    return (
        <div>
            {/* <Canvas className="animate">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas> */}
            <Navigation> </Navigation>
            <MovingComponent
                type="fadeIn"
                duration="1500ms"
                delay="0s"
                direction="normal"
                timing="linear"
                iteration="1"
                fillMode="none">
                <h1> Blogs </h1>
            </MovingComponent> 
            <div class="parent">
                <div className="column">
                    <Post
                    title="Using ML to manage FPL (Part I)"
                    // overview="Overview goes here"
                    img_link="https://miro.medium.com/max/700/1*2gxKcJ8aqUwISCc6LJWDOA.png"
                    ext_link="https://bryantxia2435.medium.com/picking-fantasy-premier-league-squads-with-machine-learning-pt-1-7988b2dd478a" className="thumbnail">
                    </Post> 
                </div>
                <div className="column"> 
                </div>
                <div className="column"> 
                </div>
            </div>  
        </div>
    )
}

export default Blog;