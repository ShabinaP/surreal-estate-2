import styled from 'styled-components';
import img from '../assets/forsalephoto.png';


const StyledAddProperty = styled.form`

h2 {
   color: ${({ theme }) => theme.colors.header};
   text-align: center;
   font-size: 24px;
}

div {
background: url(${img});
background-position: right bottom;
background-repeat: no-repeat;
background-color: white;
}

form {
    display: flex;
    font-weight: bold;
    font-size: 18px;
    margin: 15px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 100%;

    .input__title, .input__bedrooms, .input__bathrooms, .input__price, .input__email {
        min-width: 58%;
        // padding: 12px 20px;
        margin: 7px 0;
        display: inline-block;
        border-radius: 4px;
       
    }

}
input, select {
    width: 200px;
    padding: 15px 15px;
    height: 25px;
    margin: 2px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

}

select {
    min-width: 100%;
    padding: 15px 15px;
    margin: 7px 0;
}




`

  export default StyledAddProperty;