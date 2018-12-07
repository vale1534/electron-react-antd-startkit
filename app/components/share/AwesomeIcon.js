import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far, fas);

function AwesomeIcon({ className, icon, iconSet, ...props }) {
  const cns = `${className} awesome-icon`.trim();
  const icPrefix = iconSet || 'far';
  return (
    <i className={cns} {...props}>
      <FontAwesomeIcon icon={[icPrefix, icon]} />
    </i>
  );
}

export default AwesomeIcon;
