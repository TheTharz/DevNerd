import React from 'react';

export interface Blog {
  Component: React.ComponentType;
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
}
