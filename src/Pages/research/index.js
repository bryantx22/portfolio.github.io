import './index.css'
import Navigation from '../../components/Navigation';
import MovingComponent from 'react-moving-text'
import Card from '../../components/Card';

function Research () {
    return (
        <div>
            <Navigation />
            <div class="grid-container">
                <div class="grid-item"> 
                    <MovingComponent
                        type="fadeIn"
                        duration="1500ms"
                        delay="0s"
                        direction="normal"
                        timing="linear"
                        iteration="1"
                        fillMode="none">
                        <h3> Research </h3> 
                    </MovingComponent>
                    <Card 
                            title = "Career Concerns, Incentives, and Redistribution (Sztutman 2022)"
                            overview = "A dynamic overlapping generations model that captures imperfect information in labor markets in deciding optimal taxation."
                            content = "I worked as a research assisstant on this project for 6 months, which ultimately became my supervisor's job market paper. Some of my contributions include: "
                            contributions = {["Implementing custom semi-parametric regression specifications in R",
                                            "Running bootstrap methods in parallel on a high-performance cluster",
                                            "Ad hoc duties such as investigating state tax code changes with NBER's tax simulation \
                                            software and quantifying the effective tax rate at retirement by simulating lifetime income, \
                                            taxes, and retirement benefits"]}
                            ext_links = ""
                            link_text = "Working paper will be available soon"
                    />
                </div>
                <div class="grid-item">
                    <MovingComponent
                        type="fadeIn"
                        duration="1500ms"
                        delay="0s"
                        direction="normal"
                        timing="linear"
                        iteration="1"
                        fillMode="none">
                        <h3> Personal Projects </h3> 
                    </MovingComponent>
                    <Card 
                            title = "A Random Walk Picture of the NBA (2022)"
                            overview = "Inspired by Gabel and Redner (2012), I model scoring in the NBA as an anti-persistent random walk. I also used fitted parameters to predict match outcomes and compare the resulting accuracies with prominent prediction models. Last but not least, I use the model to study how altering the composition of soring plays would affect certain match-specific variables, such as lead changes."
                            content = "Some notable observations: "
                            contributions = {["3-point plays now account for 25% of all scoring plays (compared to 17% when Gabel and Redner published their paper a decade ago).",
                                            "The record of teams drawn from a fitted distribution, over simulated seasons, has an MSE <0.5 game per season compared to the real average records over the past eight seasons.",
                                            "Increasing the proportion of 3-point-plays is a force pushing towards more lead changes, though the proportion of the game the winning team spends leading is largely unchanged. "]}
                            ext_link = "https://github.com/bryantx22/nba_random_walk"
                            link_text = "GitHub"
                    />
                    <Card 
                            title = "Rreinforcement learning with Blackjack (in progress, 2022)"
                            overview = "Leveraging deep Q-Learning to play a modified version of Blackjack."
                            content = "So far: "
                            contributions = {["Uses Open AI's gym environment for Blackjack.",
                                            "Implemented a simple neural network with Pytorch for deep Q-learning.",
                                            "TODO: Need to train for more iterations to yield a higher score against the dealer."]}
                            ext_link = ""
                            link_text = ""
                    />
                </div>
            </div>
        </div>
    )
}

export default Research;