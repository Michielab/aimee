import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { audiovisual } from '../../../components/Projects/ProjectsData';

const Touchscreen = (props) => {
  const project = audiovisual[4];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Touchscreen;
