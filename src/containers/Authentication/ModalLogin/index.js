import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import css from './index.module.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {
  siginWithFirebase,
  getIdTokenWithFirebase
} from '../../../api/authFirebase';
import { useSnackbar } from 'notistack';
import { setAccessToken } from '../../../api/auth';
import { useHistory } from 'react-router-dom';
import { getPath } from '../../../routes';

import { IconFacebook, IconGoogle } from './Icons';

const DialogUI = withStyles({
  paper: {
    maxWidth: 800,
    width: '100%'
  }
})((props) => <Dialog {...props} scroll="body" />);

const ModalLogin = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  // const [openAlert, setOpenAlert] = React.useState(true);

  // const handleClose = () => setOpenAlert(false);

  const handleSigin = async (social) => {
    try {
      await siginWithFirebase(social);
      const token = await getIdTokenWithFirebase();
      setAccessToken(token);
      history.push(getPath('ROOT'));
    } catch (error) {
      error.message &&
        enqueueSnackbar(error.message, {
          variant: 'error',
          autoHideDuration: 15000
        });
    }
  };

  return (
    <>
      <DialogUI
        open={true}
        //  onClose={handleClose}
      >
        <div className={css.wrap}>
          <div className={css.dialogContent}>
            <div className={css.title}>Sign in</div>

            <div className={css.description}>
              Choosing Goods in best mood, create collections and save your
              favorite products
            </div>

            <div className={css.actions}>
              <div className={css.actionItem}>
                <Button
                  variant="contained"
                  disableElevation
                  className={css.btnFacebook}
                  fullWidth
                  onClick={() => handleSigin('facebook')}
                >
                  <IconFacebook />
                  <span>Sign in with Facebook</span>
                </Button>
              </div>

              <div className={css.actionItem}>
                <Button
                  variant="contained"
                  disableElevation
                  className={css.btnGoogle}
                  fullWidth
                  onClick={() => handleSigin('google')}
                >
                  <IconGoogle />
                  <span>Sign in with Google</span>
                </Button>
              </div>
            </div>

            <div className={css.footer}>
              By clicking Sign In, you agree to our Terms and that you have read
              our Data Use Policy, including our Cookie Use.
            </div>
          </div>
        </div>
      </DialogUI>
    </>
  );
};

export default ModalLogin;
