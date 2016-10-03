import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Layout extends Component {

  render(){
    return (
    <MuiThemeProvider>
      <div>
       <h1 className="text-center">FLUX- React Template</h1>
      </div>

    </MuiThemeProvider>
    )
  }
}