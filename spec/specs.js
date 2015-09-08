describe('triangle', function(){
  it('returns false if not a triangle', function() {
    expect(triangle(4, 2, 8)).to.equal(false);
  });

  it('returns equilateral if all sides are equal and a triangle', function() {
    expect(triangle(4, 4, 4)).to.equal("equilateral");
  });

  it('returns isosceles if all sides are equal and a triangle', function() {
    expect(triangle(6, 6, 4)).to.equal("isosceles");
  });

  it('returns scalene if none of the sides are equal', function() {
    expect(triangle(6, 7, 8)).to.equal("scalene");
  });
});
