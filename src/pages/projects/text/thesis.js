import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import Project from '../../../components/Project/Project';
import { texts } from '../../../components/Projects/ProjectsData';

const BaseComponent = () => {
  const project = texts[5];
  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default BaseComponent;
