import styled from 'styled-components';

export const ContainerTeste = styled.div`
  width: 100%;
  .Form {
    animation: fade 200ms ease-out;
  }

  .FormGroup {
    margin: 0 15px 20px;
    padding: 0;
    border-style: none;
    background-color: #7795f8;
    will-change: opacity, transform;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #829fff;
    border-radius: 4px;
  }

  .FormRow {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 15px;
    border-top: 1px solid #819efc;
  }

  .FormRow:first-child {
    border-top: none;
  }

  .FormRowLabel {
    width: 15%;
    min-width: 70px;
    padding: 11px 0;
    color: #c4f0ff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @keyframes void-animation-out {
    0%,
    to {
      opacity: 1;
    }
  }
  .FormRowInput:-webkit-autofill {
    -webkit-text-fill-color: #fce883;
    /* Hack to hide the default webkit autofill */
    transition: background-color 100000000s;
    animation: 1ms void-animation-out;
  }

  .FormRowInput {
    font-size: 16px;
    width: 100%;
    padding: 11px 15px 11px 0;
    color: #fff;
    background-color: transparent;
    animation: 1ms void-animation-out;
    border: none;
  }

  .FormRowInput::placeholder {
    color: #87bbfd;
    border: none;
  }

  .StripeElement--webkit-autofill {
    background: transparent !important;
  }

  .StripeElement {
    width: 100%;
    padding: 11px 15px 11px 0;
  }

  .SubmitButton {
    display: block;
    font-size: 16px;
    width: calc(100% - 30px);
    height: 40px;
    margin: 0 15px 0;
    background-color: #f6a4eb;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #ffb9f6;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    will-change: transform, background-color, box-shadow;
  }

  .SubmitButton:active {
    background-color: #d782d9;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #e298d8;
    transform: scale(0.99);
  }

  .SubmitButton.SubmitButton--error {
    transform: translateY(15px);
  }
  .SubmitButton.SubmitButton--error:active {
    transform: scale(0.99) translateY(15px);
  }

  .SubmitButton:disabled {
    opacity: 0.5;
    cursor: default;
    background-color: #7795f8;
    box-shadow: none;
  }

  .ErrorMessage {
    z-index: 999;
    color: #b7b5b5;
    display: flex;
    justify-content: center;
    padding: 0 15px;
    font-size: 13px;
    margin-top: 30px;
    width: 100%;
    transform: translateY(-15px);
    animation: fade 150ms ease-out;
    animation-delay: 50ms;
    animation-fill-mode: forwards;
  }

  .ErrorMessage svg {
    margin-right: 10px;
  }
`;

export const Container = styled.div`
  .Result {
    margin-top: 50px;
    text-align: center;
    animation: fade 200ms ease-out;
  }

  .ResultTitle {
    color: #81ac66;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 24px;
    text-align: center;
  }

  .ResultMessage {
    color: #9f9f9f;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 25px;
    line-height: 1.6em;
    text-align: center;
    width: 400px;
    margin: 0 auto;
  }

  .ResetButton {
    cursor: pointer;
    background-color: #f6a4eb;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #ffb9f6;
    border-radius: 4px;
    border: none;
    color: #fff;
    width: 180px;
    height: 40px;
    margin-top: 32px;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  font-size: 16px;
  width: calc(100% - 30px);
  height: 40px;
  margin: 0 15px 0;
  background-color: #f6a4eb;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #ffb9f6;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  will-change: transform, background-color, box-shadow;
`;
