import React from "react";
import "./AboutUsWhoWeAre.css";
import { Button } from "@mui/material";

const AboutUsWhoWeAre = () => {
  return (
    <>
      {/* <section className="who_we_are_sec">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-3 col-12 pr-lg-0">
        <div className="title_sec">
          <h1 className="title">WHO WE ARE ?</h1>
        </div>
      </div>
      <div className="col-lg-9 col-12 pl-lg-0">
        <div className="we_are_box">
          <p className="contents">Osiz technologies Pvt.Limited is one of the initially established companies to offer services for blockchain and cryptocurrency development. With the promise of rising blockchain technologies, it was introduced in early 2009.
            Clients will receive cutting-edge solutions from us due to our unwavering experience and comprehensive understanding in the sector. With our assistance, various clients from all around the world were able to launch their
            blockchain-based businesses and attain their goals.</p>
          <p className="contents">Our team of committed blockchain professionals will do a complete analysis, brainstorm, develop, and implement ground-breaking innovations. The ideas will be in line with market trends and guarantee the highest levels of security,
            success over the long term, sustainability, and customer satisfaction.</p>
          <p className="cus_contents">Founder/CEO Mr. Thanga Pandi and co-founder/MD Mrs. Kirithiga Thangapandi founded Osiz in 2009.</p>
          <p className="contents">"We are adored of new technologies that were seeded in 2009 and now have grown -up like a Banyan tree. Since then, we have grown into who we are with our dedication and astute teamwork. We can provide a wide range of services
            to our clients and keep our employees happy with our top-notch IT infrastructure" says Mr. Thangapandi and Mrs. Kirithiga Thangapandi.</p>
        </div>
      </div>
    </div>
  </div>
</section> */}

      <div className="main-aboutus-div">
        <div className="container-div">
          <div className="heading-about-us">
            <h1>WHO WE ARE ?</h1>
          </div>
          <div className="about-us-p">
            <p className="contents">
              Metablock Technologies is a prominent firm specializing in web and blockchain development. With a robust background in blockchain development, DEX development, coin and token creation, DeFi products, and expertise in the Metaverse/NFT ecosystem, we also offer a wide range of enterprise blockchain applications, web, mobile applications, and software development services.
              We believe Web 3.0 is imperative to build a fair and progressive digital landscape, and blockchain-led systems are at the helm of it.
            </p>
            <div className="Who-we-are-buttons">
              <Button className="button-who">Our Expert</Button>
              <Button className="button-who">Visit Now</Button>
            </div>
            {/* <p className="contents">
              In the realm of software development, MetaBlock Technologies
              stands out by delivering tailored solutions that align perfectly
              with your business objectives. Our commitment to staying at the
              forefront of technological advancements is evident in our
              blockchain development services, where we leverage the power of
              decentralized technologies to transform ideas into reality.
            </p>
            <p className="contents">
              At MetaBlock Technologies, we don't just offer services; we
              provide holistic solutions that empower businesses to thrive in
              the digital landscape. Whether you are looking to establish a
              strong online presence, launch a mobile app, create captivating
              games, develop customized software, or explore the potential of
              blockchain, we are your dedicated partner in achieving success.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsWhoWeAre;
