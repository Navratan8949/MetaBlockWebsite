import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaycrosschain extends Component {
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
        name: "Interoperable NFTs",
        paragraph:
          " Cross-chain NFT platforms enable the creation and transfer of non-fungible tokens (NFTs) across different blockchain networks. This interoperability allows users to access and interact with NFTs seamlessly across multiple blockchains, expanding their reach and utility.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Asset Portability",
        paragraph:
          "Users can transfer NFTs representing digital assets, such as art, collectibles, and virtual real estate, between different blockchain networks using cross-chain platforms. This enables asset portability and liquidity, allowing users to leverage their NFT holdings across various blockchain ecosystems.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Cross-Platform Gaming Assets:",
        paragraph:
          "NFTs representing in-game items, characters, and assets can be transferred across different gaming platforms and virtual worlds using cross-chain solutions. Players can own and use their NFT assets in multiple games, enhancing interoperability and cross-platform gaming experiences.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Decentralized Finance (DeFi) Integration",
        paragraph:
          "Cross-chain NFT platforms can integrate with decentralized finance (DeFi) protocols, allowing users to leverage their NFT assets as collateral for borrowing, lending, and yield farming across different blockchain networks. This expands the utility and liquidity of NFTs within the DeFi ecosystem.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Cross-Chain Marketplace Integration",
        paragraph:
          "NFT marketplaces operating on different blockchain networks can be interconnected through cross-chain platforms, enabling seamless trading and exchange of digital assets across diverse ecosystems. Users can buy, sell, and trade NFTs across multiple marketplaces, expanding market liquidity and accessibility.",
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
