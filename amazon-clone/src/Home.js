import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
          alt=""
        /> */}
        <div className="slider">
          <img
            className="img1"
            src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816udYiX0wU.jpg"
            alt=""
          />
          <img
            className="img2"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
            alt=""
          />
          <img
            className="img3"
            src="https://offerscouponsdeals.in/blog/wp-content/uploads/2018/12/Top_banner_PC_NewGirl.jpg"
            alt=""
          />
          {/* 
          <img
            className="img4"
            src="https://offerscouponsdeals.in/public/web/images/1540209419.jpg"
            alt=""
          /> */}
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Vivo V19 (Mystic Silver, 256 GB, 8 GB RAM)"
            price={39.99}
            image="https://m.media-amazon.com/images/I/61GUsaWdigL._AC_SS450_.jpg"
            alt=""
            rating={5}
          />
          <Product
            id="12321342"
            title="OnePlus 9 (Winter Mist, 256GB, 12GB RAM)"
            price={99.76}
            image="https://m.media-amazon.com/images/I/61MJilnI5pL._SL1500_.jpg"
            alt=""
            rating={4}
          />

          <Product
            id="12321343"
            title="Samsung Galaxy S21 Ultra 5G(16GB-512GB,Phantom Black)"
            price={239.2}
            image="https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg"
            alt=""
            rating={4}
          />

          <Product
            id="12321345"
            title="Apple iPhone 12 Pro Max (128 GB, Silver)"
            price={599.56}
            image="https://almali.store/wp-content/uploads/2021/01/iPhone-11-Pro-Max-Silver-8.jpg"
            alt=""
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="78321346"
            title="New HP Pavilion Gaming 10th Gen Intel Core i7 16GB, 1TB HDD + 256GB SSD"
            price={789.34}
            image="https://m.media-amazon.com/images/I/71h0vQq5ykL._SL1498_.jpg"
            alt=""
            rating={5}
          />

          <Product
            id="12322347"
            title="Asus Core I9 10th Gen - 32 Gb/1 Tb Ssd/Windows 10 Home/6 Gb Graphics/Nvidia ..."
            price={1099.99}
            image="https://m.media-amazon.com/images/I/81K9Es2DDFL._SL1500_.jpg"
            alt=""
            rating={6}
          />

          <Product
            id="12781348"
            title="Apple MacBook Pro 16 - inch | Intel Core i9 | 16 GB RAM | 1 TB SSD | Space Grey"
            price={1299.99}
            image="https://azcd.harveynorman.com.au/media/catalog/product/a/n/anz_macbook_pro_16in_spacegrey_pdp_1_rgb.jpg"
            alt=""
            rating={7}
          />
        </div>

        <div className="home__row">
          <Product
            id="16721349"
            title="Apple Watch Series 6 GPS - 40mm Gold Aluminium Case Space Grey"
            price={299.99}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/40-alum-gold-sport-pinksand-6s-nc?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1599810781000"
            alt=""
            rating={5}
          />
          <Product
            id="12553350"
            title="APPLE AIRPODS PRO"
            price={499.34}
            image="https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/05/04/514212/263808/airpods_pro_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2770163_o.jpg"
            alt=""
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12325651"
            title="Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL ..."
            price={1299.99}
            image="https://cdn1.smartprix.com/rx-ihOz4bQJn-w1200-h1200/samsung-crystal-4k-u.jpg"
            alt=""
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
