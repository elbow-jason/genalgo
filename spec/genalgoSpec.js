
// in separate terminals
// run `jasmine-node . --autotest  --color --verbose` for a nice 
// run `nodejs debug genalgo-app.js`
// run `node-inspector`

if(typeof require !== "undefined") {var gene = require(process.cwd() + '/lib/genalgo-app.js');}


describe("Helpers.randIndex", function() {

  it("returns a random index from a given sequence or array" , function() {

    spyOn(Math, "random").and.returnValue(0.1);

    expect(helpers.randIndex("AAAA")).toBe(0);
    expect(helpers.randIndex([0,0,0])).toBe(0);
    expect(helpers.randIndex([1])).toBe(0);
  });
});

describe("Helpers.torf", function() {

  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(helpers.torf()).toBe(true);
  });

  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.7);
    expect(helpers.torf()).toBe(false);
  });
});


describe("Helpers.genBasesObj", function() {

  it("returns an object to decode sequences into functions (ribosome)", function() {
    expect(helpers.genBasesObj("AB",["func1", "func2"])).toEqual({"A" : "func1", "B" : "func2"});
  });
});


describe("Helpers.randSeq", function(){

  it("returns a random sequence given a desired length and a codex of available characters", function(){
    expect(helpers.randSeq(4, "A")).toBe("AAAA");
  });
});

describe("Helpers.randReverse", function() {

  it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.9);
    expect(helpers.randReverse("ABCD")).toBe("ABCD");
    expect(helpers.randReverse("XYZ")).toBe("XYZ");
  });


  it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(helpers.randReverse("ABCD")).toBe("DCBA");
    expect(helpers.randReverse("XYZ")).toBe("ZYX");
  });
});


describe("Organism.addChromosome", function() {
  var rabbit;

  beforeEach(function() {
    rabbit = new Organism('AASSDDFF');
    rabbit.addChromosome('FFSSDDAA');
  });

  it("adds sequences to Organism.chromosomes", function() {
    expect(rabbit.chromosomes[0]).toBe('AASSDDFF');
    expect(rabbit.chromosomes[1]).toBe('FFSSDDAA');
  });
});



describe("Mutate.point", function() {

  it("given a symbol array and sequence, it causes a point mutation", function() {
    expect(mut.point("AB","AB", 0, 1)).toBe("BB");
    expect(mut.point("AA","AB", 0, 1)).toBe("BA");
    expect(mut.point("AA","CBA", 1, 0)).toBe("AC");
    expect(mut.point("ABCD", "G", 0, 0)).toBe("GBCD");
  });
});


describe("Mutate.insert", function() {


  it("returns a random insertion of fragment of given sequence (seq + fragment + uence)", function() {
    expect(mut.insert("AA", "BB", 1)).toBe("ABBA");
    expect(mut.insert("DDDD", "AA", 2)).toBe("DDAADD");
  });

});



describe("Mutate.sliceSeq", function() {

  var mut = Mutate();

  it("returns insertion of given fragment into given sequence at random index of sequence", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(mut.sliceSeq("AAAAAAAAA", "BBB")).toBe("AABBBAAAAAAA");
  });
});


describe("Mutate.fragment", function() {

  var mut = Mutate();
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

  var mut = new helpers.Mutate();
  it("given two sequences in an array [seq1, seq2], it will trade endcaps on the sequences and return an array", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(mut.transpose(["QQ","AA"])).toBe(/^[Q]{1,2}$/);
  });

});