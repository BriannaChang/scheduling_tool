import React, { Component } from 'react';
import SimpleCard from './SimpleCard/SimpleCard';
import Logout from './Logout'


export default class ChangePassword extends Component {

  constructor(props){
     super(props);


  this.state = {
             fields: {},
             errors: {}
         }
      }

      handleValidation(){
          let fields = this.state.fields;
          let errors = {};
          let formIsValid = true;

          //Name
          if(!fields["outlined-password-input1"]){

             formIsValid = false;
             errors["name"] = "Cannot be empty";
          }

          if(typeof fields["name"] !== "undefined"){
             if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
             }
          }

          //Email
       if(!fields["outlined-password-input2"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
       }

       if(typeof fields["outlined-password-input2"] !== "undefined" && typeof fields["outlined-password-input3"] !== "undefined"  ){
         let password1=fields["outlined-password-input2"]
         let password2=fields["outlined-password-input3"]

         if(password1 === password2){

           console.log("Passwords match!")
           errors["outlined-password-input2"]="No error"

         }

       }
       this.setState({errors: errors});
       return formIsValid;
      }



  contactSubmit(e){
       e.preventDefault();

       if(this.handleValidation()){
          alert("Form submitted");
       }else{
          alert("Form has errors.")
       }

   }

   handleChange(field, e){
       let fields = this.state.fields;
       fields[field] = e.target.value;
       this.setState({fields});
       this.handleValidation()
   }

  render() {

    return (

      // <div>
      //
      //
      // <Logout />
      //
      //
      // </div>



      <div>
      <h1 style={{textAlign:'center'}}>Changey Password </h1>

      <SimpleCard
      change={this.handleChange.bind(this, "outlined-password-input1")}
      value={this.state.fields["outlined-password-input1"]}
      valsubmit={this.contactSubmit.bind(this)}
      error={this.state.errors["outlined-password-input1"]}
      />
      </div>

    );
  }

};
