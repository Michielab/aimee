import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { audiovisual } from '../../../components/Projects/ProjectsData';

const Synchronicity = (props) => {
  const project = audiovisual[1];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Synchronicity;
