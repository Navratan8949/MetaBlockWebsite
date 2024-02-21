import React, { Component } from "react";
import Slider from "react-slick";
// import './OnDemandAppSlider.css'
// import './CardSlider.scss'
import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const SoftwareCarousel = [
    {
        name: "ERP Software",
        path: "/ERPSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/01.png"
    },
    {
        name: "SAAS Software",
        path: "/SAASSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/02-1.png"
    },
    {
        name: "Warehouse Managment Software",
        path: "/WarehouseManagmentSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/03-1.png"
    },
    {
        name: "HRMS Software",
        path: "/HRMSSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/04.png"
    },
    {
        name: "Inventory Managment Software",
        path: "/InventoryManagmentSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/05-1.png"
    },
    {
        name: "Accounting & Billing Software",
        path: "/AccountingBillingSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/06.png"
    },
    {
        name: "POS System Software",
        path: "/POSSystemSoftware",
        image: "https://themeht.com/template/soften/ltr/images/about/03.png"
    },
    {
        name: "Employee Tracking Software",
        path: "/EmployeeTrackingSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/01.png"
    },
    {
        name: "Attendance System Software",
        path: "/AttendanceSystemSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/02-1.png"
    },
    {
        name: "Library Managment System",
        path: "/LibraryManagmentSystem",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/03-1.png"
    },
    {
        name: "LMS With Live Class Software",
        path: "/LMSWithLiveClassSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/04.png"
    },
    {
        name: "University Managment  Software",
        path: "/UniversityManagmentSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/05-1.png"
    },
    {
        name: "Quiz System Software",
        path: "/QuizSystemSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/01.png"
    },
    {
        name: "Astrology Software",
        path: "/AstrologySoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/02-1.png"
    },
    {
        name: "Travel Booking Software",
        path: "/TravelBookingSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/03-1.png"
    },
    {
        name: "Matrimonial Software",
        path: "/MatrimonialSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/04.png"
    },
    {
        name: "Restaurant Managment System Software",
        path: "/RestaurantManagmentSystemSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/05-1.png"
    },
    {
        name: "Hotel Managment Software",
        path: "/HotelManagmentSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/06.png"
    },
    {
        name: "Event management Software",
        path: "/EventmanagementSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/06.png"
    },
    {
        name: "Hospital Managment System Software",
        path: "/HospitalManagmentSystemSoftware",
        image: "https://themeht.com/template/soften/ltr/images/about/03.png"
    },
    {
        name: "Real state Software",
        path: "/RealstateSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/02-1.png"
    },
    {
        name: "Clinic Managment System Software",
        path: "/ClinicManagmentSystemSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/03-1.png"
    },
    {
        name: "MLM Software",
        path: "/MLMSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/04.png"
    },
    {
        name: "Trading Software",
        path: "/TradingSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/05-1.png"
    },
    {
        name: "Job Portal Software",
        path: "/JobPortalSoftware",
        image: "https://soften.themeht.com/wp-content/uploads/2023/12/06.png"
    },
];


const GameDemandSlider = () => {
    const navigate = useNavigate();


    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        responsive: [
            {
                breakpoint: 588,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className="RelatedPortfolioSlider-main-div-2">
            <h2 className="ondemand-head">Demanding Softwares</h2>
            <div className="RelatedPortfolioSlider-div-2">
                <Slider {...settings}>
                    {SoftwareCarousel.map((item, index) => (
                        <div>
                            <div key={index} className="owl-item active" style={{ width: 270, marginRight: 30 }}>
                                <div className="item-1">
                                    <div className="ondemand__app__box">
                                        <img src={item.image} alt={item.name} title={item.name} className="crypto-xchange-sprite xchange-sprite-14" />
                                        <div className="title__div">
                                            <p>{item.name}</p>
                                        </div>
                                        <div
                                            className="overlay"
                                            onClick={() => navigate(item.path)}
                                        >
                                            <div className="overlay-content">
                                                <a href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default GameDemandSlider;