import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { audiovisual } from '../../../components/Projects/ProjectsData';
import * as images from '../../../images/index';

const Pop = (props) => {
  const project = audiovisual[0];
  console.log('img', images);
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Pop;
