
describe(".ranAddr", function() {

it("returns a random index from a given sequence or array" , function() {
    spyOn(Math, "random").and.returnValue(0.01);
    expect($gene.ranAddr("AAAA")).toBe(0);
    expect($gene.ranAddr([0,0,0])).toBe(0);
    expect($gene.ranAddr([1])).toBe(0);
  });
});

describe(".torf", function() {

  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect($gene.torf()).toBe(true);
  });

  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.7);
    expect($gene.torf()).toBe(false);
  });
});


describe(".genBasesObj", function() {

  it("returns an object to decode sequences into functions (ribosome)", function() {
    expect($gene.genBasesObj("AB",["func1", "func2"])).toEqual({"A" : "func1", "B" : "func2"});
  });
});


describe(".randomSeq", function(){

  it("returns a random sequence given a desired length and a codex of available characters", function(){
    expect($gene.randomSeq(4, "A")).toBe("AAAA");
  });
});

describe(".randReverse", function() {

it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.9);
    expect($gene.randReverse("ABCD")).toBe("ABCD");
    expect($gene.randReverse("XYZ")).toBe("XYZ");
  });


it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect($gene.randReverse("ABCD")).toBe("DCBA");
    expect($gene.randReverse("XYZ")).toBe("ZYX");
  });
});


describe("Organism.addChr", function() {
  var rabbit;

  beforeEach(function() {
    rabbit = new $gene.Organism('AASSDDFF');
    rabbit.addChr('FFSSDDAA');
  });

  it("adds sequences to $gene.Organism.chromosomes", function() {
    expect(rabbit.chromosomes[0]).toBe('AASSDDFF');
    expect(rabbit.chromosomes[1]).toBe('FFSSDDAA');
  });
});



describe("Mutate.point", function() {

  var mut = new $gene.Mutate();

  it("given a symbol array and sequence, it causes a point mutation", function() {
    spyOn(Math, "random").and.returnValue(0.01);
    expect(mut.point("AB","B")).toBe("BB");
    expect(mut.point("AA","B")).toBe("BA");
    expect(mut.point("AA","CBA")).toBe("CA");
    expect(mut.point("ABCD", "G")).toBe("GBCD");
  });
});


describe("Mutate.insert", function() {

  var mut = new $gene.Mutate();

    it("returns a random insertion of fragment of given sequence (seq + fragment + uence)", function() {
    expect(mut.insert("AA")).toMatch(/^[A]{2,4}$/);
    expect(mut.insert("DGDGD")).toMatch(/^[DG]{5,10}$/);
  });


  it("returns a random insertion of fragment of given sequence (seq + fragment + uence)", function() {
    spyOn(Math, "random").and.returnValue(0.9);
    expect(mut.insert("AAAAAA")).toBe("AAAAAAA");
    expect(mut.insert("DGDGD")).toBe("DGDGDD");
  });
});



describe("Mutate.sliceSeq", function() {

  var mut = new $gene.Mutate();
  it("returns insertion of given fragment into given sequence at random index of sequence", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(mut.sliceSeq("AAAAAAAAA", "BBB")).toBe("AABBBAAAAAAA");
  });
});


describe("Mutate.fragment", function() {

  var mut = new $gene.Mutate();
    it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect(mut.fragment("QQ")).toMatch(/^[Q]{1,2}$/);
  });


  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(mut.fragment("QQ")).toBe("Q");
    expect(mut.fragment("ASDF")).toBe("S");
  });

});

describe("Mutate.transpose", function() {

  var mut = new $gene.Mutate();
    it("given two sequences in an array [seq1, seq2], it will trade endcaps on the sequences and return an array", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(mut.transpose(["QQ","AA"])).toBe(/^[Q]{1,2}$/);
  });

});