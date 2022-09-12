import { FooterComponent } from "flowbite-react";
import React from "react";

const Footer = () => {
  return (
    <FooterComponent>
      <div className="w-full">
        <div className=" bg-[#212121] grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <FooterComponent.LinkGroup col={true}>
              <FooterComponent.Link href="#">About</FooterComponent.Link>
              <FooterComponent.Link href="#">Careers</FooterComponent.Link>
              <FooterComponent.Link href="#">Brand Center</FooterComponent.Link>
              <FooterComponent.Link href="#">Blog</FooterComponent.Link>
            </FooterComponent.LinkGroup>
          </div>
          <div>
            <FooterComponent.LinkGroup col={true}>
              <FooterComponent.Link href="#">
                Discord Server
              </FooterComponent.Link>
              <FooterComponent.Link href="#">Twitter</FooterComponent.Link>
              <FooterComponent.Link href="#">Facebook</FooterComponent.Link>
              <FooterComponent.Link href="#">Contact Us</FooterComponent.Link>
            </FooterComponent.LinkGroup>
          </div>
          <div>
            <FooterComponent.LinkGroup col={true}>
              <FooterComponent.Link href="#">
                Privacy Policy
              </FooterComponent.Link>
              <FooterComponent.Link href="#">Licensing</FooterComponent.Link>
              <FooterComponent.Link href="#">
                Terms & Conditions
              </FooterComponent.Link>
            </FooterComponent.LinkGroup>
          </div>
          <div>
            <FooterComponent.LinkGroup col={true}>
              <FooterComponent.Link href="#">iOS</FooterComponent.Link>
              <FooterComponent.Link href="#">Android</FooterComponent.Link>
              <FooterComponent.Link href="#">Windows</FooterComponent.Link>
              <FooterComponent.Link href="#">MacOS</FooterComponent.Link>
            </FooterComponent.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
          <FooterComponent.Copyright href="#" by="KhaPK™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            
          </div>
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;
