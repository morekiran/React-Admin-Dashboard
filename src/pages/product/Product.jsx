import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import {MdPublish} from "react-icons/md"

function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
         <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData}dataKey="Sales"title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan.s3.amazonaws.com/4505254/c73d2d67-a445-4981-ba28-0f1cfad56088/1624618237074-d2b0f0fb-ebad-4b45-8156-6f3611992edb.jpeg" alt="" className="productImg" />
                    <span className="productName">Apple AirPods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">Id :</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales :</span>
                        <span className="productInfoValue">5123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Active :</span>
                        <span className="productInfoValue">Yes</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">In Stock :</span>
                        <span className="productInfoValue">No</span>
                    </div>

                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple AirPods" />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan.s3.amazonaws.com/4505254/c73d2d67-a445-4981-ba28-0f1cfad56088/1624618237074-d2b0f0fb-ebad-4b45-8156-6f3611992edb.jpeg" alt="" className="productUploadImg" />
                        <label for="file">
                            <MdPublish className="PoductUploadIcon"/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product