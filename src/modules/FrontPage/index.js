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

import ProductList from 'src/components/ProductList/product-list';

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


    // Demo products
    let products = [];

    for (let index = 0; index < 10; index++) {
      products.push({
        id: index + 1,
        name: "Technical Car Building Blocks Pull Back Car Speed Champion Off road Car models Bricks Constructor STEM Toys For Children Gift",
        thumbnail: "https://ae01.alicdn.com/kf/H719f6e6ac61d4ae29f34d28455f57afag/Technical-Car-Building-Blocks-Pull-Back-Car-Speed-Champion-Off-road-Car-models-Bricks-Constructor-STEM.jpg_Q90.jpg_.webp",
        description: "1.EDUCATIONAL CONSTRUCTION ENGINEERING BUILDING BLOCKS SET This building set includes 193 pieces. Challenge your kids to build creative designs.",
      });      
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div>
                    <h3>Welcome to Homepage!</h3>
                    <ProductList products={products}/>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default FrontPage;