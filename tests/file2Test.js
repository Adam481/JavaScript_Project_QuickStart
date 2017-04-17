/*jshint esversion: 6 */
describe( "test2 checker", () => {

    it("should contain oranges test2", () => {
        expect(["apples", "oranges", "pears"]).toContain("oranges");
    });
});
