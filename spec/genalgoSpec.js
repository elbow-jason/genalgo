
// in separate terminals
// run `jasmine-node . --autotest  --color --verbose` for a nice 
// run `nodejs debug genalgo-app.js`
// run `node-inspector`

if(typeof require !== "undefined") {var gene = require(process.cwd() + '/lib/genalgo-app.js');}


if (!($gena)) { var $gena = {};}

$gena.helpers       = helpers;
$gena.mutate        = mutate;
$gena.biofuncs      = biofuncs;
$gena.Sequence      = new Sequence();
$gena.Organism      = new Organism();

describe("$gena.helpers.randIndex", function() {
  it("returns a random index from a given sequence or array" , function() {
    spyOn(Math, "random").and.returnValue(0.1);
    expect($gena.helpers.randIndex("AAAA"))   .toBe(0);
    expect($gena.helpers.randIndex([0,0,0]))  .toBe(0);
    expect($gena.helpers.randIndex([1]))      .toBe(0);
  });
});

describe("$gena.helpers.torf", function() {
  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect($gena.helpers.torf()).toBe(true);
  });

  it("returns true or false at random (this test is for true)" , function() {
    spyOn(Math, "random").and.returnValue(0.7);
    expect($gena.helpers.torf()).toBe(false);
  });
});


describe("$gena.helpers.genBasesObj", function() {
  it("returns an object to decode sequences into functions (ribosome)", function() {
    expect($gena.helpers.genBasesObj("AB",["func1", "func2"])).toEqual({"A" : "func1", "B" : "func2"});
  });
});


describe("$gena.helpers.randSeq", function(){
  it("returns a random sequence given a desired length and a codex of available characters", function(){
    expect($gena.helpers.randSeq(4, "A")).toBe("AAAA");
  });
});

describe("$gena.helpers.randReverse", function() {
  it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.9);
    expect($gena.helpers.randReverse("ABCD")) .toBe("ABCD");
    expect($gena.helpers.randReverse("XYZ"))  .toBe("XYZ");
  });


  it("returns a given sequence in reverse or forward, randomly (0.9)", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    expect($gena.helpers.randReverse(   ["A","B","C","D"]  )).toEqual(   ["D","C","B","A"]   );
    expect($gena.helpers.randReverse(   ["X","Y","Z"]      )).toEqual(   ["Z","Y","X"]       );
  });
});





describe("$gena.mutate.point", function() {
  it("given a symbol array and sequence, it causes a point mutation", function() {
    expect($gena.mutate.point(["A","B"],          ["A","B"],      0, 1))  .toEqual(["B","B"]);
    expect($gena.mutate.point(["A","A"],          ["A","B"],      0, 1))  .toEqual(["B","A"]);
    expect($gena.mutate.point(["A","A"],          ["C","B","A"],  1, 0))  .toEqual(["A","C"]);
    expect($gena.mutate.point(["A","B","C","D"],  ["G"],          0, 0))  .toEqual(["G","B","C","D"]);
  });
});


describe("$gena.mutate.insert", function() {
  it("returns a random insertion of fragment of given sequence (seq + fragment + uence)", function() {
    expect($gena.mutate.insert("AA",   "BB", 1))  .toBe("ABBA");
    expect($gena.mutate.insert("DDDD", "AA", 2))  .toBe("DDAADD");
  });

});



describe("$gena.mutate.mutInsert", function() {
  it("returns insertion of given fragment into given sequence at random index of sequence", function() {
    expect($gena.mutate.mutInsert("AAAABAAAAA")).toMatch(/[AB]*/);
  });
});
 

describe("$gena.mutate.fragment", function() {
  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gena.mutate.fragment("QQQQQ",       0, 2))  .toBe("QQ");
    expect($gena.mutate.fragment("ABCDE",       0, 2))  .toBe("AB");
    expect($gena.mutate.fragment("JASONSTEST",  2, 6))  .toBe("SONS");
  });

  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gena.mutate.fragment("QQ",    1, 0))  .toBe("Q");
    expect($gena.mutate.fragment("ASDF",  2, 1))  .toBe("S");
  });

  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gena.mutate.fragment("QQ",    1, 0))  .toBe("Q");
    expect($gena.mutate.fragment("ASDF",  2, 1))  .toBe("S");
  });

  it("returns a random fragment, in reverse or forward, from a given sequence", function() {
    expect($gena.mutate.fragment("QADSF", 0, 0))  .toBe("Q");
    expect($gena.mutate.fragment("ASDF",  1, 1))  .toBe("S");
  });
});

describe("$gena.mutate.transpose", function() {
  it("trades 'endcaps' on two sequences and return an array of the sequences", function() {
    expect($gena.mutate.transpose("QQ","AA", "PP", "EE")).toEqual(["QQAA", "PPEE"]);
  });
});

describe("$gena.mutate.fracture", function() {
  it("fractures a sequence and returns an array of the two broken pieces", function() {
    expect($gena.mutate.fracture("QQAAA", 2)).toEqual(["QQ", "AAA"]);
  });
});


describe("$gena.mutate.mutTranspose", function() {
  it("transposes the ends of two chromosomes", function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect($gena.mutate.mutTranspose("QQ", "AA")).toEqual([ "QA", "AQ"]);
  });

  it("transposes the ends of two chromosomes", function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect($gena.mutate.mutTranspose("ABCDEFG", "QRSTUVWXYZ")).toEqual([ "ABCDWXYZ", "QRSTUVEFG"]);
  });
});

describe("$gena.mutate.deletion", function() {
  it("removes an index from a sequence", function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect($gena.mutate.mutTranspose("QQ", "AA")).toEqual([ "QA", "AQ"]);
  });
});

describe("$gena.mutate.duplicate", function() {
  it("copies a sequence and returns an array of two identical sequences", function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect($gena.mutate.duplicate("ABCDEFG")).toEqual(["ABCDEFG", "ABCDEFG"]);
  });
});

describe("$gena.Sequence.init", function() {
  it("generates and initializes new sequences", function() {
    var chromo = new $gena.Sequence.init('AASSDDFF', 'chro1');
    expect(chromo.seq)          .toEqual([ 'A', 'A', 'S', 'S', 'D', 'D', 'F', 'F' ]);
    expect(chromo.seqLength)    .toBe(8);
    expect(chromo.seqName)      .toBe('chro1');
  });
});



describe("$gena.Organism.init", function() {
  it("initializes a new organism with a single sequence, a name, and some fuel (clobbers old organism props)", function() {
    
    var rabbit = $gena.helpers.createOrganism('rabbit', 'AASSDDFF', 'chromosome1', 45);
    expect(rabbit.organismName)         .toBe('rabbit');
    expect(rabbit.chromosomes[0].seq)   .toEqual([ 'A', 'A', 'S', 'S', 'D', 'D', 'F', 'F' ]);
    expect(rabbit.fuel)                 .toBe(45);
    // expect($gena.Organism.chromosomes[0].organismName)toBe('rabbit');
  });
});

describe("$gena.Organism.addChromosome", function() {
  it("adds sequences to Organism.chromosomes", function() {
    var chrX = new Sequence();
    chrX.init('FFSSDDAA', "chromosomeX");
    $gena.Organism.addChromosome(chrX);
    expect($gena.Organism.chromosomes[0].seq).toEqual([ 'F', 'F', 'S', 'S', 'D', 'D', 'A', 'A' ]);
  });
});


describe("$gena.Biofuncs.replicate", function() {
  it("copies an entire organism, as in a replication event (mitosis)", function() {

    var rabbit  = $gena.helpers         .createOrganism  ('rabbit', 'AASSDDFF', 'chromosome1', 45);
    var mouse   = $gena.biofuncs         .replicate       ( rabbit, 'mouse');

    expect(mouse.chromosomes[0].seq)          .toEqual([ 'A', 'A', 'S', 'S', 'D', 'D', 'F', 'F' ]);
    expect(mouse.chromosomes[0].seqLength)    .toBe(8);
    expect(mouse.chromosomes[0].seqName)      .toBe('chromosome1');
    rabbit.chromosomes = [];
    expect(rabbit.chromosomes)                .toEqual([]);
    expect(mouse.chromosomes[0].seq)          .toEqual([ 'A', 'A', 'S', 'S', 'D', 'D', 'F', 'F' ]);
    expect(mouse.organismName)                .toBe('mouse');
  });
});


describe("$gena.Biofuncs.ingest", function() {
  it("one organism eats another and the eaten organism is killed." , function() {

    var rabbit  = $gena.helpers        .createOrganism  ('rabbit', 'AASSDDFF', 'chromosome1', 45);
    var mouse   = $gena.helpers        .createOrganism  ('mouse' , 'AASSDDFF', 'chromosome1', 43);

    $gena.biofuncs.ingest(rabbit, mouse);
    expect(rabbit.fuel)   .toBe(88);
    expect(mouse.fuel)    .toBe(0);
  });
});