import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import Project from '../../components/Project/Project';
import { projects } from '../../components/Projects/ProjectsData';

const Synchronicity = (props) => {
  const project = projects[4];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Synchronicity;
