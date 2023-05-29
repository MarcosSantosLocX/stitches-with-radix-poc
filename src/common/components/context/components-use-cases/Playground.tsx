import * as React from 'react'

import Inputs from './Inputs';
import Selects from './Selects';
import Buttons from './Buttons';
import Tooltip from './Tooltip';

import * as S from './styles';

export default function Playground() {
  return (
    <S.CardGroup>
      <Inputs />
      <Selects />
      <Buttons />
      <Tooltip />
    </S.CardGroup>
  );
}
