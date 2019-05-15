import React, { Component } from 'react'
import { Avatar, Balloon } from 'nes-react'

export default class Character extends Component {
    render() {
        return <section style={{ marginBottom: '10px' }}>
            <h3>{this.props.name}</h3>
            <Avatar src={this.props.image}
                large
                style={{
                    marginRight: '10px'
                }}
            />
            <Balloon fromLeft style={{ maxWidth: '76%' }}>
                {this.props.text}
            </Balloon>
            <Balloon fromRight style={{ maxWidth: '45%' }}>
            {this.props.faceapidata}
            </Balloon>
            <Avatar src={this.props.msftvintage}
                large
                style={{
                    marginLeft: '10px'
                }}
            />
        </section>
    }
}
