import React, { useState } from 'react';
import { BuildExplorer } from './components/BuildExplorer';
import { BuildsTable } from './components/BuildsTable';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import PageLayout from '../../layouts/Page';

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      <Button onClick={() => setModalOpen(true)}>Add new build</Button>

      <BuildsTable defaultData={[{ status: 'green', name: 'atv' }]} />

      <Modal visible={modalOpen} onCancel={() => setModalOpen(false)}>
        <BuildExplorer />
      </Modal>
    </PageLayout>
  );
};

export default Dashboard;
