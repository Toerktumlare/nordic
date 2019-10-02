import { configure } from '@storybook/react';
import 'tachyons/css/tachyons.min.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
