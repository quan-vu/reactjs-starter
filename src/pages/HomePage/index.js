import React from 'react';
import css from './index.module.scss';
import { useRecoilValue } from 'recoil';
import { userState } from 'states/userState';
import RootRef from '@material-ui/core/RootRef';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Helloworld from 'shared/components/Helloworld';
import SimpleDialog from 'shared/components/SimpleDialog';

function HomePage () {

    const emails = ['username@gmail.com', 'user02@gmail.com'];

    const user = useRecoilValue(userState);

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const refSimpleDialog = React.createRef();


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

            {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>

            <Helloworld selectedValue={selectedValue} />
            
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}

export default HomePage;