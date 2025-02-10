import { plugin } from 'bun';
import { styleLoader } from 'bun-style-plugin';

await plugin(styleLoader({
  targets: ['chrome 80', 'mozilla 80', 'safari 14', 'ie 11'],
}));
