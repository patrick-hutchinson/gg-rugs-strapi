import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageGridImageGrid01 extends Schema.Component {
  collectionName: 'components_image_grid_image_grid_01s';
  info: {
    displayName: 'image-grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    row: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface RugGridRugGrid extends Schema.Component {
  collectionName: 'components_rug_grid_rug_grids';
  info: {
    displayName: 'rug-grid';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    carpets: Attribute.Relation<
      'rug-grid.rug-grid',
      'oneToMany',
      'api::carpet.carpet'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image-grid.image-grid-01': ImageGridImageGrid01;
      'rug-grid.rug-grid': RugGridRugGrid;
    }
  }
}
