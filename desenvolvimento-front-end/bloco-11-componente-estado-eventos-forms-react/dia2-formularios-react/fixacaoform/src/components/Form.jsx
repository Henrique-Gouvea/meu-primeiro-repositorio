import React, { Component } from "react"

class Form extends Component {
  constructor () {
      super();
      this.state = {
        select: '',
        input1: '',
        input2: '',
        textA: '',
      }
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange ({target}) {
   const {name, value} = target;
   this.setState({[name]:value})
  }

    render(){
      const {
          state: {
            select, input1, input2, textA,
        },handleChange} = this;

      return <form action="">
          <label htmlFor=""> Select
              <select value={select} name="select" id="" onChange={handleChange}>
                  <option value=""></option>
                  <option value="mg">mg</option>
                  <option value="sp">sp</option>
              </select>
          </label>
          <label htmlFor="">Input1
              <input value={input1} name="input1" type="text" onChange={handleChange}/>
          </label>Input2
          <label htmlFor="">
              <input value={input2} name="input2" type="text" onChange={handleChange}/>
          </label>
          <label htmlFor="">TextSrea
              <textarea value={textA} name="textA" id="" cols="30" rows="10" onChange={handleChange}></textarea>
          </label>
          <button type="submit">enviar</button>
      </form>
  }
}

export default Form;