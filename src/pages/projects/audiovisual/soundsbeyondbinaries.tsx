import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { audiovisual } from '../../../components/Projects/ProjectsData';

const SoundsBeyondBinaries = (props) => {
  const project = audiovisual[0];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default SoundsBeyondBinaries;
