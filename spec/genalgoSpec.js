
// in separate terminals
// run `jasmine-node . --autotest  --color --verbose` for a nice 
// run `nodejs debug genalgo-app.js`
// run `node-inspector`

if(typeof require !== "undefined") {var gene = require(process.cwd() + '/lib/genalgo-app.js');}


describe("Helpers.randIndex", function() {

  it("returns a random index from a given sequence or array" , function() {
    spyOn(Math, "random").and.returnValue(0.1);
    expect(Helpers.randIndex("AAAA")).toBe(0);
    expect(Helpers.randIndex([0,0,0])).toBe(0);
    expect(Helpers.randIndex([1])).toBe(0);
  });
});

describe("Helpers.torf", function() {

  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(Helpers.torf()).toBe(true);
  });

  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.7);
    expect(Helpers.torf()).toBe(false);
  });
});


describe("Helpers.genBasesObj", function() {

  it("returns an object to decode sequences into functions (ribosome)", function() {
    expect(Helpers.genBasesObj("AB",["func1", "func2"])).toEqual({"A" : "func1", "B" : "func2"});
  });
});


describe("Helpers.randSeq", function(){

  it("returns a random sequence given a desired length and a codex of available characters", function(){
    expect(Helpers.randSeq(4, "A")).toBe("AAAA");
  });
});

describe("Helpers.randReverse", function() {

  it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.9);
    expect(Helpers.randReverse("ABCD")).toBe("ABCD");
    expect(Helpers.randReverse("XYZ")).toBe("XYZ");
  });


  it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect(Helpers.randReverse("ABCD")).toBe("DCBA");
    expect(Helpers.randReverse("XYZ")).toBe("ZYX");
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



describe("$gene.Mutate.point", function() {

  it("given a symbol array and sequence, it causes a point mutation", function() {
    expect($gene.Mutate.point("AB","AB", 0, 1)).toBe("BB");
    expect($gene.Mutate.point("AA","AB", 0, 1)).toBe("BA");
    expect($gene.Mutate.point("AA","CBA", 1, 0)).toBe("AC");
    expect($gene.Mutate.point("ABCD", "G", 0, 0)).toBe("GBCD");
  });
});


describe("$gene.Mutate.insert", function() {

  it("returns a random insertion of fragment of given sequence (seq + fragment + uence)", function() {
    expect($gene.Mutate.insert("AA", "BB", 1)).toBe("ABBA");
    expect($gene.Mutate.insert("DDDD", "AA", 2)).toBe("DDAADD");
  });

});



describe("$gene.Mutate.mutInsert", function() {

  it("returns insertion of given fragment into given sequence at random index of sequence", function() {
    expect($gene.Mutate.mutInsert("AAAABAAAAA")).toMatch(/[AB]*/);
  });
});


describe("$gene.Mutate.fragment", function() {

  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gene.Mutate.fragment("QQQQQ", 0, 2)).toBe("QQ");
    expect($gene.Mutate.fragment("ABCDE", 0, 2)).toBe("AB");
    expect($gene.Mutate.fragment("JASONSTEST", 2,6)).toBe("SONS");
  });


  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gene.Mutate.fragment("QQ", 1, 0)).toBe("Q");
    expect($gene.Mutate.fragment("ASDF", 2, 1)).toBe("S");
  });

  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gene.Mutate.fragment("QQ", 1, 0)).toBe("Q");
    expect($gene.Mutate.fragment("ASDF", 2, 1)).toBe("S");
  });

  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gene.Mutate.fragment("QADSF", 0, 0)).toBe("Q");
    expect($gene.Mutate.fragment("ASDF", 1, 1)).toBe("S");
  });
});

describe("$gene.Mutate.transpose", function() {

  it("trades 'endcaps' on two sequences and return an array of the sequences", function() {
    expect($gene.Mutate.transpose("QQ","AA", "PP", "EE")).toEqual(["QQAA", "PPEE"]);
  });
});

describe("$gene.Mutate.fracture", function() {

  it("fractures a sequence and returns an array of the two broken pieces", function() {
    expect($gene.Mutate.fracture("QQAAA", 2)).toEqual(["QQ", "AAA"]);
  });
});


describe("$gene.Mutate.mutTranspose", function() {

  it("fractures a sequence and returns an array of the two broken pieces", function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect($gene.Mutate.mutTranspose("QQ", "AA")).toEqual([ "QA", "AQ"]);
  });

  it("fractures a sequence and returns an array of the two broken pieces", function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect($gene.Mutate.mutTranspose("ABCDEFG", "QRSTUVWXYZ")).toEqual([ "ABCDWXYZ", "QRSTUVEFG"]);
  });
});


describe("Sequence", function() {

  it("generates new sequence objects", function() {
    var chromo = new Sequence('AASSDDFF', 'chro1');
    expect(chromo.sequence).toBe('AASSDDFF');
    expect(chromo.seqLength)  .toBe(8);
    expect(chromo.seqName)    .toBe('chro1');
  });
});
