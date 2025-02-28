import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  const [activeTab, setActiveTab] = useState('looker');

  return (
    <AppContainer>
      <GlobalStyles />
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <Dashboard type="powerbi" active={activeTab === 'powerbi'} />
      <Dashboard type="looker" active={activeTab === 'looker'} />
    </AppContainer>
  );
}

export default App; 