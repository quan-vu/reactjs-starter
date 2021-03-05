import React from 'react';
import Typography from '@material-ui/core/Typography';
import css from './logo.module.scss';
import logo from 'src/assets/images/logo.png';

function Logo() {
    
    const brandname = 'React';

    return (
        <div className={css.appLogo}>
            <span className={css.image}>
                <img alt="" src={logo} />
            </span>
            <Typography className={css.text} variant="h6" noWrap>
                {brandname}
            </Typography>         
        </div>
    );
}

export default Logo;