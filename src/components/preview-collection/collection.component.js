import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>
    <div className="preview">
      {
        items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} { ...otherItemProps }/>
        ))
      }
    </div>
  </div>
)

export default Collection;
