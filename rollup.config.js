import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';

export default {
    input: 'EJetEFB.tsx',
    output: {
        dir: 'build',
        format: 'es'
    },
    plugins: [
        css({ output: 'EJetEFB.css' }),
        resolve(),
        typescript()
    ]
}