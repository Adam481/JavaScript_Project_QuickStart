/*jshint esversion: 6 */
describe( "test1 checker", () => {

    it("should contain oranges test1", () => {
        expect(["apples", "oranges", "pears"]).toContain("oranges");
    });
});
