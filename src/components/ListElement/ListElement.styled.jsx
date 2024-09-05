import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 18px;
  color: #112236;
`;

const Span = styled.span`
  margin-left: 10px;
`;

const Btn = styled.button`
  width: 20%;
  min-width: 56px;
  height: 30px;
  padding: 0;
  border-radius: 15px;

  border: 2px solid #e5eaf1;
  cursor: pointer;

  background-color: #f3f6f9;
  text-transform: capitalize;
  font-size: 16px;
  color: #516174;

  transition: all var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus {
    color: #112236;
    filter: brightness(0.95);
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export { Paragraph, Span, Btn };
