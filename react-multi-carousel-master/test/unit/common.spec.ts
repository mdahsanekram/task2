import {
  getInitialState,
  getIfSlideIsVisbile,
  getTransformForPartialVsibile,
  isInLeftEnd,
  isInRightEnd,
} from "./utils";

describe("common utils", () => {
  describe("getIfSlideIsVisbile", () => {
    test("gets slide visibile", () => {
      const isVisible = getIfSlideIsVisbile(0, {
        currentSlide: 0,
        slidesToShow: 3
      });
      expect(isVisible).toBe(true);
    });
    test("gets slide hidden", () => {
      const isVisible = getIfSlideIsVisbile(0, {
        currentSlide: 4,
        slidesToShow: 3
      });
      expect(isVisible).toBe(false);
    });
  });
  describe("getInitialState", () => {
    test("ssr", () => {
      const state = {
        domLoaded: false
      };
      const props = {
        ssr: true,
        deviceType: "desktop",
        responsive: {
          desktop: {
            breakpoint: {
              min: 1000,
              max: 1200
            },
            items: 3
          }
        }
      };
      const initialState = getInitialState(state, props);
      expect(initialState).toEqual({
        shouldRenderOnSSR: true,
        flexBisis: "33.3",
        domFullyLoaded: false,
        partialVisibilityGutter: 0,
        shouldRenderAtAll: true
      });
    });
    test("no ssr", () => {
      const state = {
        domLoaded: true,
        itemWidth: 300,
        slidesToShow: 3,
        containerWidth: 1000
      };
      const props = {
        ssr: true,
        deviceType: "desktop",
        responsive: {
          desktop: {
            breakpoint: {
              min: 1000,
              max: 1200
            },
            items: 3
          }
        }
      };
      const initialState = getInitialState(state, props);
      expect(initialState).toEqual({
        shouldRenderOnSSR: false,
        flexBisis: undefined,
        domFullyLoaded: true,
        partialVisibilityGutter: 0,
        shouldRenderAtAll: true
      });
    });
  });

  describe("getTransformForPartialVsibile", () => {
    test("In end of the slides and not in infinite mode", () => {
      const number = getTransformForPartialVsibile(
        {
          slidesToShow: 3,
          transform: 400,
          currentSlide: 7,
          totalItems: 9,
          containerWidth: 800,
          itemWidth: 100
        },
        40,
        { infinite: false }
      );
      expect(number).toBe(1300);
    });
    test('Not end of the slides and not in inifinite mode', () => {
      const number = getTransformForPartialVsibile(
        {
          slidesToShow: 3,
          transform: 400,
          currentSlide: 4,
          totalItems: 9
        },
        40,
        { infinite: false }
      );
      expect(number).toBe(560);
    })
    test('In infinite mode and at the end of the slides', () => {
      const number = getTransformForPartialVsibile(
        {
          slidesToShow: 3,
          transform: 400,
          currentSlide: 7,
          totalItems: 9
        },
        40,
        { infinite: true }
      );
      expect(number).toBe(680);
    })
  });
  test('Should reach the left end', () => {
    const state = { currentSlide: 0 };
    const result = isInLeftEnd(state);
    expect(result).toBe(true);
  })
  test('Should not reach the left end', () => {
    const state = { currentSlide: 4 };
    const result = isInLeftEnd(state);
    expect(result).toBe(false);
  })
  test('Should not reach the right end', () => {
    const state = { currentSlide: 4, slidesToShow: 4, totalItems: 10 };
    const result = isInRightEnd(state);
    expect(result).toBe(false);
  })
  test('Should reach the right end', () => {
    const state = { currentSlide: 6, slidesToShow: 4, totalItems: 10 };
    const result = isInRightEnd(state);
    expect(result).toBe(true);
  })
});
