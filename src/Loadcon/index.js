import React, { Component } from 'react'
import LoadCon from 'react-loadcon'

  export default class ExampleComponent extends Component {
    state = {
      percentage: 0,    // isRequired
      status: 'normal', // oneOf(['normal', 'active', 'exception', 'success'])
      type: 'pie',      // oneOf(['pie', 'donut'])
    }

    componentDidMount () {
      this.apiCall()
    }

    apiCall = () => {
      this.setState({ status: 'active' })
      fetch(url)
        .then(res => return res.json())
        .then(data => {
          // normal loading
          this.setState({ status: 'normal' })

          // loading with success
          this.setState({ status: 'success' })
          setTimeout(() => {
            this.setState({ status: 'normal' })
          }, 1500)
        })
        .catch(e => {
          this.setState({ status: 'exception' })
          setTimeout(() => {
            this.setState({ status: 'normal' })
          }, 1500)
        })
    }

    render () {
      return (
        <LoadCon
          percentage={this.state.percentage}
          status={this.state.status}
          type={this.state.type}
        />
      )
    }
  }  