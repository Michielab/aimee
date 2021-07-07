import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import Project from '../../components/Project/Project';
import { projects } from '../../components/Projects/ProjectsData';

const Abismo = (props) => {
  const project = projects[0];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Abismo;
