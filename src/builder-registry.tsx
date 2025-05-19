/**
 * Builder Registry
 * 
 * This file serves as the central registration point for all components that 
 * should be available in the Builder.io visual editor.
 * 
 * How to use:
 * 1. Import your custom component
 * 2. Register it using the Builder.registerComponent method
 * 3. Provide a name and any input options for the Builder editor
 */

import { Builder } from '@builder.io/react';
import HelloWorld from './components/HelloWorld';

// Register all components that should be available in the Builder.io editor

// Register the HelloWorld component
Builder.registerComponent(HelloWorld, {
  name: 'Hello World',
  description: 'A simple hello world component to demonstrate Builder.io integration',
  inputs: [
    {
      name: 'name',
      type: 'string',
      defaultValue: 'World',
      required: true,
    },
  ],
});

/**
 * To add more components:
 * 
 * 1. Create your component in the components folder
 * 2. Import it at the top of this file
 * 3. Register it using the pattern above, with appropriate inputs
 * 
 * Example:
 * 
 * import MyNewComponent from './components/MyNewComponent';
 * 
 * Builder.registerComponent(MyNewComponent, {
 *   name: 'My New Component',
 *   description: 'Description for the Builder.io editor',
 *   inputs: [
 *     {
 *       name: 'propName',
 *       type: 'string',
 *       defaultValue: 'Default Value',
 *     },
 *   ],
 * });
 */