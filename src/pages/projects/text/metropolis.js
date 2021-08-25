import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { texts } from '../../../components/Projects/ProjectsData';

const Metropolis = () => {
  const project = texts[0];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Metropolis;
