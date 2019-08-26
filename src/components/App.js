import React from 'react';
import styled from 'styled-components';
import WebGL from '../webGL';

// styled wrappers for webGL
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div`
`;



// Application entry point for rendering
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  };

  // render call to webpage for webGL
  render() {
    return (
      <AppWrapper>
        <Container>
          <WebGL />
        </Container>
      </AppWrapper>
    );
  }
};

export default App;