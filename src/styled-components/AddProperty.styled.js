import styled from 'styled-components';


const StyledAddProperty = styled.div`

    border: 1px solid blue;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
  
  .Addproperty h2 {
    color: #028EA1;
  }
  
  input, select {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  form {
    border: 1px solid red;
    width: 50%;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 1px;
    text-align: center;
  }
  
  form .input__title, form .input__bedrooms, form .input__bathrooms, form .input__price, form .input__email {
    min-width: 58%;
    padding: 12px 20px;
    margin: 7px 0;
    display: inline-block;
    border-radius: 4px;
  }
  
  input:focus {
    border: none;
    border-bottom: 2px solid #028EA1;
  }
  
  select {
    min-width: 58%;
    padding: 12px 20px;
    margin: 7px 0;
  }
  
  .submitButton {
    display: inline-block;
    padding: 5px;
    padding: 12px 25px;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    border: 2px solid #020202;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    background-color: #028EA1;
    -webkit-box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    letter-spacing: 1px;
  }
  
  .submitButton:hover {
    color: #028EA1;
    background-color: #020202;
    border: 2px solid #028EA1;
  }`

  export default StyledAddProperty;