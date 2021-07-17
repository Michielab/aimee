import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { communityandcuratorialwork } from '../../../components/Projects/ProjectsData';

const Chaaka = (props) => {
  const project = communityandcuratorialwork[0];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Chaaka;
