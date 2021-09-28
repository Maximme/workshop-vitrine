import React from 'react';
import ReactDOM from 'react-dom';
import Wave from 'react-wavify';
import styled from '@emotion/styled';


const WaveContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 785px;
  height: ${(props) => props.level + 'vh'};
  display: flex;
  z-index: 0;
  transform: rotate(360deg);
`;

export default function Waver() {
  return (
    <div style={{ marginTop: "-200px" }}>
      <WaveContainer level={90}>
        <Wave
          fill="#FFFEF6"
          opacity="0.80"
          paused={false}
          options={{
            height: 75,
            amplitude: 40,
            speed: 0.2,
            points: 3,
          }}
        />
      </WaveContainer>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Waver />, rootElement);
