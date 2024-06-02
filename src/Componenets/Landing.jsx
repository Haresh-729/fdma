import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import { motion, AnimatePresence  } from 'framer-motion';
import img_L1 from "../assets/img_L1.png";
import target from "../assets/target.png";
import performance from "../assets/speedometer.png";
import security from "../assets/encrypted.png";
import strategy from "../assets/global.png";
import image_op1 from "../assets/image_OP1.png";
import card_1 from "../assets/card_1.png";
import card_2 from "../assets/card_2.png";
import card_3 from "../assets/card_3.png";
import quote from "../assets/Quotemarks.png";
import logos from "../assets/logos.png";
import receipe_1 from "../assets/receipe_1.jpg";
import receipe_2 from "../assets/receipe_3.jpg";
import {HeartIcon, ClockIcon, DocumentCheckIcon, TrophyIcon} from "@heroicons/react/24/solid"
import Card from '../Utils/Card';
const Landing = () => {
    const dataImg = [
        {
            id: 1,
            image: image_op1,
            heading: "Genderless Kei - Japan's Hot",
            desc: "Set to launch on the manufacturer's new A330neo aircraft in 2024. Set to launch on the manufacturer's new A330neo aircraft in 2024",
            animation: "fade-down"
        },
        {
            id: 2,
            image: receipe_2,
            heading: "Better Strategy & Quality",
            desc: "Set to launch on the manufacturer's new A330neo aircraft in 2024. Set to launch on the manufacturer's new A330neo aircraft in 2024",
            animation: "slide-left"
        },
        {
            id: 3,
            image: receipe_1,
            heading: "Genderless Kei - Japan's Hot",
            desc: "Set to launch on the manufacturer's new A330neo aircraft in 2024. Set to launch on the manufacturer's new A330neo aircraft in 2024",
            animation: "slide-up"
        },
    ];
    const data = [
        {
            image: card_1,
            title: "WEB DEVELOPMENT"
        },
        {
            image: card_2,
            title: "HEADING CARD 2"
        },
        {
            image: card_3,
            title: "HEADING CARD 3"
        },
        {
            image: card_1,
            title: "WEB DEVELOPMENT"
        },
        {
            image: card_2,
            title: "HEADING CARD 2"
        },
        {
            image: card_3,
            title: "HEADING CARD 3"
        },
        {
            image: card_1,
            title: "WEB DEVELOPMENT"
        },
        {
            image: card_2,
            title: "HEADING CARD 2"
        },
        {
            image: card_3,
            title: "HEADING CARD 3"
        },
        {
            image: card_1,
            title: "WEB DEVELOPMENT"
        },        
    ]
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        lname: "",
      });
    const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [imgId, setImgId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const slider = document.getElementById("slider");
    const handleScroll = () => {
      const pageWidth = slider.clientWidth;
      const scrollLeft = slider.scrollLeft;
      const currentPage = Math.round(scrollLeft / pageWidth);
      setCurrentPage(currentPage);
    };
    
    slider.addEventListener("scroll", handleScroll);
    
    const calculateTotalPages = () => {
      const totalWidth = slider.scrollWidth;
      const pageWidth = slider.clientWidth;
      const totalPages = Math.ceil(totalWidth / pageWidth);
      setTotalPages(totalPages);
    };
    
    calculateTotalPages();
    window.addEventListener("resize", calculateTotalPages);
    
    return () => {
      slider.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateTotalPages);
    };
  }, []);
  const slideLeft = () => {
    var slider1 = document.getElementById("slider");
    slider1.scrollLeft = slider1.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider1 = document.getElementById("slider");
    slider1.scrollLeft = slider1.scrollLeft - 500;
  };
  const goToPage = (index) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = index * slider.clientWidth;
    setCurrentPage(index);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.termsChecked){
        alert("Please accept terms and conditions.");
        // setIsModalOpen(false);
        return;
    }
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.lname === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch(
        "https://getform.io/f/186afd40-252b-43f7-b129-3d652b8f0c6a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          lname: "",
        });
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("lname").value = "";
        setIsModalOpen(false);
        alert("Successfully Sent...!");
      } else {
        console.error("Form submission failed:", response.statusText);
        // Handle the error or show an error lname
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className=" overflow-x-hidden scrollbar-hide ">
        <Element  name="hero" className="h-screen items-center justify-center flex px-[10rem]">
            <div data-aos="fade-down" className="flex flex-row items-center justify-between ">
                <div className="flex flex-col items-start justify-center w-1/2 gap-10 text-clip text-black">
                    <p className="uppercase font-bold text-[#ff3a50] text-2xl">award winning</p>
                    <motion.p className="text-[3rem] uppercase font-extrabold">digital marketing agency</motion.p>
                    <p>Mollit Lorem ad consequat incididunt pariatur. Qui commodo veniam minim exercitation Lorem commodo. Nisi reprehenderit adipisicing tempor mollit magna.</p>
                    <button className="rounded-sm bg-[#ff3a50] hover:shadow-lg hover:scale-105 transition-all border-none text-white font-light focus:border-none animate-bounce" onClick={()=>{setIsModalOpen(true)}}>CONTACT US</button>
                </div>
                <div  data-aos="slide-left" className="rounded-xl">
                    <img src={img_L1} alt="landing_img" style={{ width: "100%", height: "auto" }}/>
                </div>
            </div>
        </Element>
        <Element  name="wwd" id='wwd' className="h-screen bg-[#fafafa] px-[10rem] py-[5rem]">
            <div className="flex flex-col items-start justify-center gap-12">
                <p data-aos="fade-up" className="uppercase font-bold text-[#ff3a50] text-2xl ">what we do</p>
                <div data-aos="fade-right" className="flex flex-row">
                    <p className="uppercase text-[2rem] font-extrabold w-full">services we provide for you</p>
                    <p>Aliqua minim tempor sunt magna. Non ad nostrud culpa mollit culpa nostrud. Laboris nisi elit ut Lorem in pariatur sunt. Culpa consectetur incididunt ut ex officia duis laborum adipisicing exercitation ad cillum excepteur. Consequat veniam commodo pariatur id laboris eiusmod tempor ut consectetur dolor velit.</p>
                </div>
                <div data-aos="fade-right" className=" relative w-full flex flex-col gap-4">
                    <div id="slider" className="relative w-full overflow-x-auto scroll-smooth scrollbar-hide">
                        <div className="flex transition-transform duration-300 ease-in-out gap-5"
                            // style={{ transform: `translateX(-${currentIndex * 15}rem)` }}
                            >
                            {data.map((item, index) => (
                            // <div key={index} className="flex-shrink-0 w-[15rem] h-[20rem] rounded-xl overflow-hidden">
                            //     <img className="w-full h-full object-cover" src={image} alt={`Slide ${index}`} />
                            // </div>
                            <Card image={item.image} title={item.title} index={index}/>
                            ))}
                        </div>
                    </div>
                    {/* <button onClick={slideRight} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Prev</button>
                    <button onClick={slideLeft} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Next</button> */}
                    <div className="px-5 flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <span className="relative flex h-3 w-3" key={index}>
                                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${index === currentPage ? 'animate-ping border-2 border-[#ff3a50]' : 'border-gray-400'}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${index === currentPage ? 'bg-[#ff3a50]' : 'bg-gray-400'} `}></span>
                            </span>                        
                        ))}
                    </div>
                </div>
            </div>
        </Element>
        <Element name="wcu" className="flex items-center justify-center px-[10rem] py-[5rem]">
            <div className="flex flex-col items-center justify-center gap-6">
                <p className="uppercase font-bold text-[#ff3a50] text-2xl">why choose us</p>
                <p className="uppercase text-[2rem] font-extrabold"><strong>why we are best</strong></p>
                <div className="grid grid-cols-4 gap-4 items-center justify-evenly py-2">
                    <div data-aos="fade-right" className=" flex flex-col items-start justify-center p-4 rounded-xl select-none cursor-default hover:shadow-md hover:border-t-2">
                        <img className="w-[4rem] h-[4rem]" src={target} alt="target_logo" />
                        <p className="font-bold capitalize text-[1.4rem]">clarified vision & target</p>
                        <p className="text-[1.2rem]">Dolore irure ullamco mollit ex excepteur laboris ullamco laboris do. </p>
                    </div>
                    <div data-aos="fade-down" className=" flex flex-col items-start justify-center p-4 rounded-xl select-none cursor-default hover:shadow-md hover:border-t-2">
                        <img className="w-[4rem] h-[4rem]" src={performance} alt="target_logo" />
                        <p className="font-bold capitalize text-[1.4rem]">high performance</p>
                        <p className="text-[1.2rem]">Dolore irure ullamco mollit ex excepteur laboris ullamco laboris do.</p>
                    </div>
                    <div data-aos="fade-up" className=" flex flex-col items-start justify-center p-4 rounded-xl select-none cursor-default hover:shadow-md hover:border-t-2">
                        <img className="w-[4rem] h-[4rem]" src={security} alt="target_logo" />
                        <p className="font-bold capitalize text-[1.4rem]">maintain security</p>
                        <p className="text-[1.2rem]">Dolore irure ullamco mollit ex excepteur laboris ullamco laboris do.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className=" flex flex-col items-start justify-center p-4 rounded-xl select-none cursor-default hover:shadow-md hover:border-t-2">
                        <img className="w-[4rem] h-[4rem]" src={strategy} alt="target_logo" />
                        <p className="font-bold capitalize text-[1.4rem]">better strategy and quality</p>
                        <p className="text-[1.2rem]">Dolore irure ullamco mollit ex excepteur laboris ullamco laboris do.</p>
                    </div>
                </div>
            </div>
        </Element>
        <Element name="projects" className="px-[10rem] py-[5rem]">
            <div className="flex flex-col items-center justify-center gap-6">
                <p className="uppercase font-bold text-[#ff3a50] text-2xl">our projects</p>
                <p className="uppercase text-[2rem] font-extrabold text-black"><strong>why we are best</strong></p>
                <div className="flex flex-row gap-4 rounded-[2rem]">
                    <div data-aos="zoom-in">
                            <motion.img className="transition-all" src={dataImg[imgId-1].image} alt="ourProj_img" />
                    </div>
                    <div  className="flex flex-col w-1/3 rounded-xl">
                        {
                            dataImg.map((item, key) => (
                                <div onMouseOver={()=> {setImgId(item.id); console.log(item.id)}} key={key} data-aos={item.animation} className="h-full transition-all bg-[#f6f6f6] hover:bg-[#ff3a50] hover:text-white select-none cursor-pointer text-black flex flex-col items-start justify-center px-5 py-2 gap-3">
                                    <p className="font-bold capitalize text-2xl">{item.heading}</p>
                                    <p className="text-1.2">{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Element>
        <Element name="eg" className="bg-[#fafafa] px-[10rem] py-[5rem]">
            <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-6">
                <p className='uppercase font-bold text-[#ff3a50] text-2xl'>experts growth</p>
                <p className='uppercase text-[2rem] font-extrabold text-black'>our company growth</p>
                <div className="flex flex-row gap-5 items-center justify-around w-full">
                    <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center bg-white rounded-xl gap-1 select-none cursor-default hover:drop-shadow-xl  transition-all hover:scale-105 hover:border-t-2">
                        <HeartIcon className="text-[#ff3a50] w-[3rem]"></HeartIcon>
                        <p className="text-[3rem] text-black">199 +</p>
                        <p className="capitalize text-[.9rem]">satisfied customers</p>
                    </div>
                    <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center bg-white rounded-xl gap-1 select-none cursor-default hover:drop-shadow-xl  transition-all hover:scale-105 hover:border-t-2">
                        <ClockIcon className="text-[#ff3a50] w-[3rem]"></ClockIcon>
                        <p className="text-[3rem] text-black">1591 +</p>
                        <p className="capitalize text-[.9rem]">days of operation</p>
                    </div>
                    <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center bg-white rounded-xl gap-1 select-none cursor-default hover:drop-shadow-xl  transition-all hover:scale-105 hover:border-t-2">
                        <DocumentCheckIcon className="text-[#ff3a50] w-[3rem]"></DocumentCheckIcon>
                        <p className="text-[3rem] text-black">283 +</p>
                        <p className="capitalize text-[.9rem]">complete project</p>
                    </div>
                    <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center bg-white rounded-xl gap-1 select-none cursor-default hover:drop-shadow-xl transition-all hover:scale-105 hover:border-t-2">
                        <TrophyIcon className="text-[#ff3a50] w-[3rem]"></TrophyIcon>
                        <p className="text-[3rem] text-black">75 +</p>
                        <p className="capitalize text-[.9rem]">win awards</p>
                    </div>
                </div>
            </div>
        </Element>
        <Element data-aos="fade-right" name="cf" className="px-[10rem] py-[5rem]">
            <div className="flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col items-center justify-center">
                    <p className="uppercase font-bold text-[#ff3a50] text-2xl">client's feedback</p>
                    <p className="uppercase text-[2rem] font-extrabold text-black"><strong>people say's about us !</strong></p>
                    <br />
                    <div data-aos="zoom-in" data-aos-delay="1000" className="relative flex flex-col w-1/2 px-[1rem] py-[1rem]">
                        <img src={quote} className="absolute left-0 top-0 w-[4rem]" alt="" />
                        <p className="text-[1.4rem] z-50">Ipsum mollit Lorem quis veniam voluptate deserunt Lorem laborum aute cillum eiusmod deserunt proident.</p>
                    </div>
                </div>
            </div>
        </Element>
        <Element name="footer" className="px-[10rem] py-[5rem] bg-[#ff3a50]">
            <div className=" ">
                <div className="flex flex-row gap-10">
                    <img className="w-full" src={logos} alt="" />                        
                </div>
            </div>
        </Element>
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 w-full transition-all">
              <div className="bg-[#fafafa] p-4 rounded-lg w-1/2 shadow-lg flex flex-col items-center">
                <div className="flex items-end justify-end w-full">
                  <button onClick={closeModal} className="appearance-none border-[#ff3a50] hover:border-pink-500 px-3 py-1 bg-white shadow-md rounded-full">X</button>
                </div>
                <form className="font-bold rounded-xl p-4 flex flex-col px-4 items-center justify-center bg-white" action="https://getform.io/f/186afd40-252b-43f7-b129-3d652b8f0c6a" method="POST" onSubmit={handleSubmit}>
                    <h4 className="mb-4">Talk to us</h4>
                    <input id='email' name='email' type="email" placeholder='Work Email*' className="w-full p-2 mb-4 rounded-md outline-none focus:border-none focus:ring-2 focus:ring-ff3366 bg-transparent border border-gray-300" onChange={handleChange} />
                    <div className='flex flex-row items-center justify-center mb-4'>
                        <input id='name' name='name' type="text" placeholder='First Name*' className="w-1/2 p-2 mr-2 rounded-md outline-none focus:border-none focus:ring-2 focus:ring-ff3366 bg-transparent border border-gray-300" onChange={handleChange}/>
                        <input id='lname' name='lname' type="text" placeholder="Last Name*" className="w-1/2 p-2 rounded-md outline-none focus:border-none focus:ring-2 focus:ring-ff3366 bg-transparent border border-gray-300" onChange={handleChange}/>
                    </div>
                    <div className='flex flex-row items-center mb-4'>
                        <input type="checkbox" id="terms" className="mr-2" onChange={(e) => setFormData({ ...formData, termsChecked: e.target.checked })}/>
                        <label htmlFor="terms">Agree to terms and conditions.</label>
                    </div>
                    <button className="bg-[#ff3a50] text-white hover:shadow-lg border-none">
                        Contact Us
                    </button>
                </form>



              </div>
            </div>
          )}
    </div>
  )
}

export default Landing