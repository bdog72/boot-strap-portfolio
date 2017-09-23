import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      imageURL: '',
      bio: ''
    }
  }

  componentDidMount () {
    window.fetch('https://api.github.com/users/bdog72').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({name: data.name, location: data.location, imageURL: data.avatar_url, bio: data.bio})
    })
  }
  render () {
    return <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>{this.state.name}</h1>
          <Image src={this.state.imageURL} responsive />
          <p1>{this.state.bio}</p1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <img src='https://www.theironyard.com/etc/designs/theironyard/icons/iron-yard-logo.svg' />
          <img src='https://cdn1.iconfinder.com/data/icons/line-essentials-64/20/3155-128.png' height='100' width='100' />
          <img src='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_287-128.png' height='100' width='100' />
        </div>
        <div className='col'>
          <a href='https://github.com/bdog72'>
            <img className='img-fluid' src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
          </a>
        </div>
        <div className='col'>C</div>
      </div>
      <div className='row'>
        <div className='col'>
          <p>813-505-4733</p>
          <p>HIGH5BRI@HOTMAIL.COM</p>
        </div>
      </div>
    </div>
  }
}

export default App
