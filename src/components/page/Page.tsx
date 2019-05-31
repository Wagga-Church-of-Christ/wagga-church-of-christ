import React from 'react';

import Template from '../template/Template';
import './Page.scss'

const Page = (props) => {
  return (
    <Template>
      <div className="page">
        {props.children}
      </div>
    </Template>
  )
}

export default Page;
