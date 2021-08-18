import React, { Component } from 'react';
import calendar from "react-calendar";

export default class kalender extends Component {

     state = {
         date : new Date()
     }

     onChange = date => {
         this.setState({
             date
         })
     }



    render() {
        return (
            <div>
            <calendar/>
            onChange={this.onChange}
             <div>
                 <p>Alle aufgaben für heute.{this.state.date.toLocaleDateString()}</p>
                 <form>
               <input type="checkbox" />
               <label>Wäsche aufhängen</label><br/>
               <input type="checkbox" />
               <label>Einkaufen gehen</label><br/>
               <input type="checkbox" />
               <label>Javascript lernen</label>
              
            </form>
             </div>
                
            </div>
        )
    }
}
