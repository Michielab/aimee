import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { communityandcuratorialwork } from '../../../components/Projects/ProjectsData';

const BaseComponent = () => {
  const project = communityandcuratorialwork[3];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default BaseComponent;
