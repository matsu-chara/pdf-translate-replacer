import * as replacer from "./replacer";

describe("replacer", () => {
  test("replace correctly", () => {
    const original = `This is a
sample of text.
 Fig.2.1.0 shows the result of experiments.`;
    const expected = `This is a sample of text.

Fig.2.1.0 shows the result of experiments.`;
    expect(replacer.replace(original)).toEqual(expected);
  });
});
