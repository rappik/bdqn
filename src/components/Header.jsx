import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 4px 20px var(--shadow-color);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const Header = ({ activeTab, onTabChange }) => {
  return (
    <HeaderContainer>
      <Title>
        Dashboard Khách hàng mới Bưu điện Quảng Nam
      </Title>
      <Tabs>
        <Tab 
          className={activeTab === 'powerbi' ? 'active' : ''} 
          onClick={() => onTabChange('powerbi')}
        >
          PowerBI
        </Tab>
        <Tab 
          className={activeTab === 'looker' ? 'active' : ''} 
          onClick={() => onTabChange('looker')}
        >
          Looker
        </Tab>
      </Tabs>
    </HeaderContainer>
  );
};

export default Header; 