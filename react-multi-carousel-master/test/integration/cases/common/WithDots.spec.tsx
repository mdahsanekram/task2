import * as React from "react";
import { configure, shallow, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import Carousel from "../../../../lib/Carousel";
import Dots from "../../../../lib/Dots";
import CustomDot from "../../components/CustomDot";
import Card from "../../components/Card";
import { responsive1 } from "../../common/responsive";
import { longData } from "../../common/data";

describe("With dots", () => {
  test("Default dots", () => {
    const wrapper = mount(
      <Carousel
        showDots={true}
        ssr
        deviceType="desktop"
        swipeable={false}
        draggable={false}
        responsive={responsive1}
        slidesToSlide={2}
        infinite={true}
        minimumTouchDrag={0}
      >
        {longData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
    expect(wrapper.find(Dots).length).toBe(1);
    expect(wrapper.find(".react-multi-carousel-dot").length).toBe(6);
    wrapper.unmount();
  });
  test("Custom dots", () => {
    const wrapper = mount(
      <Carousel
        swipeable={false}
        draggable={false}
        ssr
        deviceType="desktop"
        responsive={responsive1}
        slidesToSlide={1}
        showDots={true}
        customDot={<CustomDot />}
        minimumTouchDrag={0}
      >
        {longData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
    expect(wrapper.find(CustomDot).length).toBe(10);
    wrapper.unmount();
  });
  test("Should render dots outside outside of the container if renderDotsOutside is true", () => {
    const wrapper = mount(
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          ssr
          deviceType="desktop"
          responsive={responsive1}
          slidesToSlide={1}
          renderDotsOutside
          showDots={true}
          customDot={<CustomDot />}
          minimumTouchDrag={0}
        >
          {longData.map(card => {
            return <Card {...card} />;
          })}
        </Carousel>
      </div>
    );
    expect(wrapper.find(".custom-dot").length).toBe(10);
    expect(
      wrapper.find(".react-multi-carousel-list").find(".custom-dot").length
    ).toBe(0);
    wrapper.unmount();
  });
  test("Should not render dots if there is not enough children", () => {
    const wrapper = mount(
      <Carousel
        showDots={true}
        ssr
        deviceType="desktop"
        swipeable={false}
        draggable={false}
        responsive={responsive1}
        slidesToSlide={2}
        minimumTouchDrag={0}
        customDot={<CustomDot />}
      >
        {longData.slice(0, 1).map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
    expect(wrapper.find(".custom-dot").length).toBe(0);
    wrapper.unmount();
  });
});
