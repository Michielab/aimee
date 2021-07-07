import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import Project from '../../components/Project/Project';
import { projects } from '../../components/Projects/ProjectsData';
import * as images from '../../images/index';

const Karaoke = (props) => {
  const project = projects[6];
  console.log('img', images);
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default Karaoke;
