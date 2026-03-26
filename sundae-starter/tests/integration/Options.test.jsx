import { screen, render } from "@testing-library/react";

import Options from "../../src/components/entry/Options";

test("display image for each scoop from server", async () => {
  render(<Options optionType="scoops" />);

  // find image
  const scoopImages = await screen.findAllByRole('img', {
    name: /scoop$/i
  })
  expect(scoopImages).toHaveLength(2)

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map(elm => elm.alt)
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
});
