import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import AddProduct from "./AddProduct";
import FilterProducts from "./FilterProducts";
import ListProducts from "./ListProducts";

function SampleRecoilCrudPage() {
	return (
		<div className="p-3">
			<div className="py-5 text-center">
				<h1>Product's CRUD</h1>
				<p className="lead">
					Go ahead and play with a CRUD made with React, Bootstrap and Recoil.js
				</p>
			</div>
            <div>
                <AddProduct />
            </div>
	        <div>
                <FilterProducts />
					<hr />
                <ListProducts />
            </div>
		</div>
	);
}

export default SampleRecoilCrudPage;
