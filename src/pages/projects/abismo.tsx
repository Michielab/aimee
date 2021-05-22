import * as React from 'react';
import Index from '../index';
import Project from '../../components/Project/Project';
import { projects } from '../../components/Projects/ProjectsData';

const Abismo = (props) => {
  const project = projects[0];
  return (
    <Index>
      <Project {...project} />
    </Index>
  );
};

export default Abismo;
