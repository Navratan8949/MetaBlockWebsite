import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaynftart extends Component {
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
        name: "Digital Art Ownership",
        paragraph:
          "NFT art marketplaces allow artists to tokenize their digital artworks as non-fungible tokens (NFTs), providing proof of ownership and authenticity on the blockchain. Collectors can purchase these NFTs, gaining ownership rights to the digital art and supporting the artist directly.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Limited Edition Collectibles",
        paragraph:
          "Artists and creators can release limited edition or one-of-a-kind digital collectibles as NFTs on art marketplaces. These collectibles can include digital art pieces, animations, virtual sculptures, and more, offering unique and exclusive assets for collectors to acquire.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Royalties and Resale Rights",
        paragraph:
          "Smart contracts embedded in NFT art tokens can automate royalty payments for artists whenever their works are resold on the secondary market. This ensures that artists continue to receive compensation for their creations, even after the initial sale.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Licensing and Commercial Use",
        paragraph:
          "Artists can license their NFT artworks for commercial use in virtual worlds, gaming environments, digital publications, and other digital platforms. NFT art marketplaces provide a platform for artists to showcase their work and connect with potential licensors.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "Curation and Discovery",
        paragraph:
          "NFT art marketplaces often feature curated collections and discovery tools to help users find new and emerging artists, genres, and styles. Curators, collectors, and art enthusiasts can explore diverse artworks and trends within the digital art ecosystem.",
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
