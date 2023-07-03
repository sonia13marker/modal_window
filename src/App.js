import { Button, Modal, Space, Typography } from 'antd';
import './App.css';
import { useState } from 'react';

const { Text } = Typography;

function App() {

  const [activeModal, setActiveModal] = useState(false);

  function openModal() {
    setActiveModal(true);
  }

  function closeOk() {
    setActiveModal(false);
  }

  function closeCancel() {
    setActiveModal(false);
  }

  return (
    <div className="App">
       <Button type="primary" size='large' onClick={() => openModal()}>Click me, please!</Button>
       <Modal title="Oh, I was discovered..." 
       open={activeModal} 
       onOk={closeOk} 
       onCancel={closeCancel}
       centered> 
          <Text level={2} style={{margin: '20px 0', display: 'block'}}>Hi, I'm modal window!</Text>
       </Modal>
    </div>
  );
}

export default App;
