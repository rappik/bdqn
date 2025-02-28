import styled from 'styled-components';

const Container = styled.div`
  width: 98%;
  max-width: 1400px;
  margin: 0.5rem auto;
  background: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${props => props.active ? 'fadeIn 0.3s ease-in-out' : 'none'};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  flex-grow: 1;
  border-radius: 16px;
`;

const Dashboard = ({ type, active }) => {
  const urls = {
    powerbi: "https://app.powerbi.com/view?r=eyJrIjoiYmQ4ZmQ2MTYtNmUxMC00Y2U1LWEzZWQtMjAzZWY3N2IzZTBjIiwidCI6IjRkNmQ2N2FlLTViNTUtNDJhYy05ZGFhLTkzOTk3Yzc3YTg3YSIsImMiOjEwfQ%3D%3D",
    looker: "https://lookerstudio.google.com/embed/reporting/458d28c2-14a1-4c51-8fb9-2189133b8825/page/aQHaE"
  };

  return (
    <Container active={active}>
      <StyledIframe
        title="Dashboard Tuần"
        src={urls[type]}
        allowFullScreen
        sandbox={type === 'looker' ? "allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" : ""}
      />
    </Container>
  );
};

export default Dashboard; 