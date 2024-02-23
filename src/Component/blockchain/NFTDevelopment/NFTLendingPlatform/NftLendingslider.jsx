import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaylending extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

      //    cssEase: "linear"
    };

    const sliderdata = [
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Collateralized Loans",
        paragraph:
          "NFT lending platforms can enable users to use their non-fungible tokens as collateral to secure loans. Borrowers can lock their NFTs into smart contracts and receive loans in cryptocurrency or stablecoins, providing liquidity without selling their valuable digital assets.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Leveraged Trading",
        paragraph:
          "Traders can use NFT lending platforms to borrow NFTs for leveraged trading purposes. By borrowing NFTs representing digital assets or collectibles, traders can amplify their trading positions and potentially increase their profits, although this comes with increased risk.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Yield Farming and Staking",
        paragraph:
          " NFT lending platforms can offer opportunities for users to earn yield by lending out their NFTs to other users or liquidity pools. Lenders can earn interest or rewards in the form of additional tokens for providing liquidity to the platform.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "NFT Fractionalization",
        paragraph:
          "NFT lending platforms can enable users to fractionalize ownership of their NFTs, allowing them to lend out or sell fractions of their digital assets to multiple investors. This can unlock liquidity for NFT owners while providing investment opportunities for fractional owners.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "NFT Rentals",
        paragraph:
          "NFT lending platforms can facilitate the rental of NFTs, allowing users to temporarily lease digital assets for a fee. Renters can use the NFTs for various purposes, such as virtual experiences, gaming, or marketing campaigns, without needing to purchase the NFT outright.",
      },
    ];
    return (
      <div>
        {/* <h2 class="title">
          Voices of Our <span class="cus_title">Satisfied Clients</span>
        </h2> */}

        <Slider {...settings}>
          {sliderdata.map((item, index) => (
            <div key={index}>
              <div className="item">
                <div className="usecase_box ">
                  <div className="head_sec">
                    <img src={item.image} className="sprite_icons" alt="NFT for Art" title="NFT for Art" style={{ objectPosition: '0px 0px' }} />
                    <div className="head_sec">
                      <h3 className="sub_title">{item.name}</h3>
                    </div>
                  </div>
                  <p className="sub_contents">{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
