import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { audiovisual } from '../../../components/Projects/ProjectsData';

const Filamental = (props) => {
  const project = audiovisual[2];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Filamental;
