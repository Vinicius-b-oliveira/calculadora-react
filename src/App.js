import Input from './components/Input';
import Button from './components/Button';

import { Container, Content } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0')
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {

      const res = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(res));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {

      const res = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(res));
      setOperation('');
    }
  }

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {

      const res = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(res));
      setOperation('');
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {

      const res = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(res));
      setOperation('');
    }
  }

  const handleExponentNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('**');
    } else {

      const res = Number(firstNumber) ** Number(currentNumber);
      setCurrentNumber(String(res));
      setOperation('');
    }
  }

  const handleRestNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    } else {

      const res = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(String(res));
      setOperation('');
    }
  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {

      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '**':
          handleExponentNumbers();
          break;
        case '%':
          handleRestNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>

      <h1>Bem vindo ! <br /> Essa é minha calculadora <br /> Obs: (no momento só é possível operar dois números por vez)</h1>

      <Content>
        <Input value={currentNumber} />

        <Button label="c" onClick={handleOnClear} />
        <Button label="%" onClick={handleRestNumbers} />
        <Button label="^" onClick={handleExponentNumbers} />
        <Button label="x" onClick={handleMultiplyNumbers} />

        <Button label="7" onClick={() => handleAddNumber('7')} />
        <Button label="8" onClick={() => handleAddNumber('8')} />
        <Button label="9" onClick={() => handleAddNumber('9')} />
        <Button label="/" onClick={handleDivNumbers} />

        <Button label="4" onClick={() => handleAddNumber('4')} />
        <Button label="5" onClick={() => handleAddNumber('5')} />
        <Button label="6" onClick={() => handleAddNumber('6')} />
        <Button label="-" onClick={handleMinusNumbers} />

        <Button label="1" onClick={() => handleAddNumber('1')} />
        <Button label="2" onClick={() => handleAddNumber('2')} />
        <Button label="3" onClick={() => handleAddNumber('3')} />
        <Button label="+" onClick={handleSumNumbers} />

        <Button label="0" onClick={() => handleAddNumber('0')} />
        <Button label="." onClick={() => handleAddNumber('.')} />
        <Button label="=" onClick={handleEquals} />

      </Content>
    </Container>
  );
}

export default App;
