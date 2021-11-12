import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  background-color: ${({ theme }) => theme.colors.header};
  p {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default StyledHeader;