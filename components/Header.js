import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2563eb, #4267ce);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const Header = ({ activeTab, onTabChange }) => {
  return (
    <HeaderWrapper>
      <Title>Dashboard Khách hàng mới Bưu điện Quảng Nam</Title>
      <TabContainer>
        <TabButton 
          active={activeTab === 'powerbi'} 
          onClick={() => onTabChange('powerbi')}
        >
          PowerBI
        </TabButton>
        <TabButton 
          active={activeTab === 'looker'} 
          onClick={() => onTabChange('looker')}
        >
          Looker
        </TabButton>
      </TabContainer>
    </HeaderWrapper>
  );
};

export default Header; 