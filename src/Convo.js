import React, { Component } from 'react'
import { Balloon } from 'nes-react'

export default class Convo extends Component {
    render() {
        return <section style={{ marginBottom: '10px' }}>
             <Balloon fromRight style={{ maxWidth: '45%' }}>
                {this.props.mariochat}
            </Balloon>
            <Balloon fromLeft style={{ maxWidth: '45%' }}>
                {this.props.octocatchat}
            </Balloon>

        </section>
    }
}
