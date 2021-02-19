import React from 'react';
import css from './index.module.scss';
import { useRecoilValue } from 'recoil';
import { userState } from '../../states/userState';

import AlertDialog from 'shared/components/AlertDialog';

function HomePage () {

    const user = useRecoilValue(userState);

    return (
        <div>
            <p className={css.home__greeting}>
                Welcome to Homepage!
            </p>

            {user && <div>
                <p><strong>Logged in User:</strong></p>
                <p>ID: {user.id}</p>
                <p>Fullname: {user.fullname}</p>
            </div>}

            <AlertDialog/>
        </div>
    )
}

export default HomePage;