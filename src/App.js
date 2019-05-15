import React, { Component } from 'react'
import { Container, Icon, List, Sprite,ControllerIcon, Balloon } from 'nes-react'
import Character from './Character'
import Convo from './Convo'
import AstrologyData from './AstrologyData.json'
import ConvoData from './ConvoData.json'

export default class App extends Component {
  render() {
    return <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 768,
      padding: '10px'
    }}>
      <center>
        <h1>Mario Kart Astrology <a href='https://github.com/StephenRadachy/Mario-Kart-Astrology' ></a></h1>
        <Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' />
        <h4>"Your chosen Mario Kart player says WAY more than a zodiac sign does" - <a href='https://twitter.com/ChloeCondon/status/1108738908999700480' target='_blank' rel='noopener noreferrer'>@ChloeCondon</a></h4>     
        <Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes'></ControllerIcon><Icon icon='star' /><ControllerIcon controller='snes-jp'></ControllerIcon><Icon icon='star' />
        <br></br>
        <br></br>
      <section>
        {
          ConvoData
            .sort((a, b) => a.octocatchat.localeCompare(b.octocatchat))
            .map(c => <Convo octocatchat={c.octocatchat} mariochat={c.mariochat}></Convo>)
        }
      </section>
      <Sprite sprite='mario' /><Sprite sprite='octocat' />
      </center>
      <br></br>
      <br></br>
      <Container title='Greetings!'>

        <h4>This data has been interpreted through Chloe, using the <a href='http://aka.ms/chloemario' target='_blank' rel='noopener noreferrer'>Microsoft Face API</a><a href='http://aka.ms/chloemario'> <Icon icon='heart' /></a>.</h4>
        <br></br>
        <h4>The original site + concept was created by <a href='https://twitter.com/StephenRadachy' target='_blank' rel='noopener noreferrer'>@StephenRadachy</a> and is available to fork on  <a href='https://github.com/StephenRadachy/Mario-Kart-Astrology'><Icon icon='github' /></a>.</h4>
        </Container>
      <br></br>
      <br></br>
      <br></br>
      <section>
        {
          AstrologyData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(c => <Character name={c.name} image={c.image} text={c.text} msftvintage={c.msftvintage} faceapidata={c.faceapidata} key={Math.random().toString().substring(2)} />)
        }
      </section>
      <br></br>
      <Container title='credits'>
        <p>Built with</p>
        <List>
          <li><a href='https://github.com/facebook/create-react-app'>Create React App</a></li>
          <li><a href='https://github.com/nostalgic-css/NES.css'>NES.css</a></li>
          <li><a href='https://github.com/bschulte/nes-react'>nes-react</a></li>
          <li><a href='http://aka.ms/chloemario'>Microsoft Face API</a></li>
        </List>
        <p>Mario Kart 8 Deluxe characters & images</p>
        <List>
          <li><a href='https://www.mariowiki.com/Mario_Kart_8_Deluxe#Characters'>Super Mario Wiki</a></li>
        </List>
      </Container>
    </div>
  }
}
