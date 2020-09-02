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

  test("title", () => {
    const original = `Mr. A and Ms. B talks. Mrs.C,
Mstr. D, Dr.E and Prt. F are friends.`;
    const expected = `Mr. A and Ms. B talks.

Mrs.C, Mstr. D, Dr.E and Prt. F are friends.`;
    expect(replacer.replace(original)).toEqual(expected);
  });

  test("e.g., i.e.", () => {
    const original = `e.g. containers. This is a
book. i.e. this is a book. in chapter 2.a.
this is a book`;
    const expected = `e.g. containers.

This is a book.

i.e. this is a book.

in chapter 2.a.

this is a book`;
    expect(replacer.replace(original)).toEqual(expected);
  });

  test("• bullets", () => {
    const original = `following are samples • one is a pen; and • one
is a pen.`;
    const expected = `following are samples

• one is a pen;
and

• one is a pen.`;
    expect(replacer.replace(original)).toEqual(expected);
  });

  test("et al.", () => {
    const original = `Alie et al. designed awesome architecure.`;
    const expected = `Alie et al. designed awesome architecure.`;
    expect(replacer.replace(original)).toEqual(expected);
  });

  test(":", () => {
    const original = `These components are:
• Something`;
    const expected = `These components are:

• Something`;
    expect(replacer.replace(original)).toEqual(expected);
  });

  test(";", () => {
    const original = `These components;
Those components`;
    const expected = `These components;
Those components`;
    expect(replacer.replace(original)).toEqual(expected);
  });
});
