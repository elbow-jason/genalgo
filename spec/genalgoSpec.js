//$pg.Sequence function tests follow

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





/*
describe("Mutate.point", function() {

 it("given a symbol array and sequence, it causes a point mutation", function() {
    expect($gene.Mutate.point("A","B")).toBe("B");
    expect($gene.Mutate.point("AA","B")).toBe("AB" || "BA");
    expect($gene.Mutate.point("AA","BC")).toBe("AB" || "AC" || "BA" || "CA");
  });
});








//.baseCount
describe("Sequence.baseCount", function() {
  var sequence;

  beforeEach(function() {
    sequence = new $pg.Sequence('AAAGGGGCCCCCTTTTTT', true);
  });

  it("returns the number of given bases in a given sequence", function() {
    expect(sequence.baseCount(sequence.sequence, 'A')).toBe(3);
    expect(sequence.baseCount(sequence.sequence, 'G')).toBe(4);
    expect(sequence.baseCount(sequence.sequence, 'C')).toBe(5);
    expect(sequence.baseCount(sequence.sequence, 'T')).toBe(6);
    expect(sequence.baseCount(sequence.sequence, 'E')).toBe(0);
  });
});


  // finds GC content of this
  //should return a number between 0 and 1.
  // e.g. given "GGCC" => 1.0
        //given "GATC" => 0.5
        //given "CCCC" => 1.0
        //given "AATC" => 0.25
  
describe("Sequence.calcGCContent", function() {
var sequence;

it("returns the number of given bases in a given sequence", function() {
  sequence = new $pg.Sequence('GGCC', true);
  expect(sequence.calcGCContent(sequence.sequence, sequence.sumG, sequence.sumC)).toBe(1.0);
  sequence = new $pg.Sequence('GATC', true);
  expect(sequence.calcGCContent(sequence.sequence, sequence.sumG, sequence.sumC)).toBe(0.5);
  sequence = new $pg.Sequence('CCCC', true);
  expect(sequence.calcGCContent(sequence.sequence, sequence.sumG, sequence.sumC)).toBe(1.0);
  sequence = new $pg.Sequence('AATC', true);
  expect(sequence.calcGCContent(sequence.sequence, sequence.sumG, sequence.sumC)).toBe(0.25);
  sequence = new $pg.Sequence('AATT', true);
  expect(sequence.calcGCContent(sequence.sequence, sequence.sumG, sequence.sumC)).toBe(0.0);

  });
});

describe(".getNNPairs", function() {

it("returns an array of pairs of bases found in a given sequence", function() {
    expect($pg.getNNPairs('ATGC')).toEqual(['AT','TG','GC']);
    expect($pg.getNNPairs('A')).toBe(false);
  });
});

//$pg helpers/library follows
  //returns the complement of the param 'this' as this is presented. i.e. 
  //  passed in = "ATTTTAGCGATCCC"
  //  returned =  "TAAAATCGCTAGGG"
  //  
  // f_seq is for "forward sequence"
describe(".genComplement", function() {

  it("returns complement for given sequences", function() {
    expect($pg.genComplement('ATTTTAGCGATCCC')).toBe('TAAAATCGCTAGGG');
  });

});


  //returns the complement of the param 'this' as this is presented. i.e. 
  //  passed in = "ATTTTAGCGATCCC"
  //  returned =  "CCCTAGCGATTTTA"
  //  
  // f_seq is for "forward sequence"
describe(".seqReverse", function() {

  it("returns the reverse of a given sequence", function() {
    expect($pg.seqReverse('ATTTTAGCGATCCC')).toBe('CCCTAGCGATTTTA');
  });

});



describe(".genPrimer", function() {
  var longSequence = "ATAGCATTTTTTCCCCCCCGGGGGGGAAAAACCCCCTCGACGATA";
  var primerLength = 7;

  it("returns the forward primer from the beginning region of a given sequence ", function() {
    expect($pg.genPrimer(longSequence, 0, primerLength, true)).toBe('ATAGCAT');
    expect($pg.genPrimer(longSequence, 0, primerLength, true)).toBe('ATAGCAT');
    expect($pg.genPrimer(longSequence, 2, primerLength, true)).toBe('AGCATTT');
  });
  
  it("returns the reverse primer from the ending region of a given sequence ", function() {
    expect($pg.genPrimer(longSequence, 0, primerLength, false)).toBe('TATCGTC');
  });

});
*/ 


