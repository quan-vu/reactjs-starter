import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import css from './index.module.scss';
import { useRecoilValue } from 'recoil';
import { userState } from 'src/states/userState';

import HelloWorld from 'src/components/HelloWorld/HelloWorld';
import SimpleDialog from 'src/components/Modals/SimpleDialog';

function FrontPage() {

    const emails = ['username@gmail.com', 'user02@gmail.com'];

    const user = useRecoilValue(userState);

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        let value = '';
        if (selectedValue == emails[1]) {
            value = emails[0];
        } else {
            value = emails[1];
        }

        setSelectedValue(value);
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const refSimpleDialog = React.createRef();


    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div>
                    <h3 className={css.greeting}>Welcome to Homepage!</h3>

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

                    <HelloWorld selectedValue={selectedValue} />

                    <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                </div>
            </Container>
        </React.Fragment>
    )
}

export default FrontPage;