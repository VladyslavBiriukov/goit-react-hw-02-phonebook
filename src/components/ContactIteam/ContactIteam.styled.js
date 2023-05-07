import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #28282d;
  background-position: 0 0;
  border: 1px solid #28282d;
  border-radius: 11px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 33.4929px;
  padding: 2px 12px;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-underline-offset: 1px;
  transition: border .2s ease-in-out,box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  word-break: break-word;

  &:active,
&:hover,
&:focus {
    outline: 0;
}

&:active {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}

:hover {
  background-color: #FFE3E3;
  border-color: #FAA4A4;
  color: #D33A2C;
}
&:active:hover,
&:focus:hover,
&:focus {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}

`;


