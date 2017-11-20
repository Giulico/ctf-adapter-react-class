module.exports = (params) => `

// @flow
import * as React from 'react';

// Types
import type {Props} from './types';

// Style
import style from './style.scss';

/**
 * ${params.name} component
 * @class ${params.name}
 * @extends {React.Component}
 */
class ${params.name} extends React.Component<Props> {

    render() {
        return (
            <div className={style.root}>
                {this.constructor.name}
            </div>
        );
    }

};

export default ${params.name};`.trim();