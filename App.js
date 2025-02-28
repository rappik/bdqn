import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: #f8fafc;
    color: #1e293b;
    min-height: 100vh;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0 1rem;
  position: relative;
`;

function App() {
  const [activeTab, setActiveTab] = useState('looker');

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <MainContent>
          <Dashboard type="powerbi" active={activeTab === 'powerbi'} />
          <Dashboard type="looker" active={activeTab === 'looker'} />
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App; 