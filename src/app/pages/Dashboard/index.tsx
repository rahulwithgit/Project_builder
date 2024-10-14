/**
 *
 * Dashboard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Hamburgur } from '../../components/Hamburgur';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Div>
      <Hamburgur />
    </Div>
  );
}

const Div = styled.div``;
