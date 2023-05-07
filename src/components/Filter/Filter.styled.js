import styled from '@emotion/styled';

export const Input = styled.input`
 padding: 6px 12px;
  background: rgb(31, 32, 35);
  border: 1px solid rgb(60, 63, 68);
  border-radius: 4px;
  font-size: 13px;
  color: rgb(247, 248, 248);
  height: 20px;
  width: 200px;
  appearance: none;
  transition: border 0.15s ease 0s;

    &:focus{
        outline: none;
        box-shadow: none;
        border-color: rgb(100, 153, 255);
    }
`;

export const FilterLabel = styled.label`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px;
  color: #333340;
  font-size: 18px;
`;