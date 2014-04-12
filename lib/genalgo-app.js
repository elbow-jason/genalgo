var $gene = $gene ||  {};


    $gene =             require('./genalgo-helpers.js');
    $gene.Mutate =      require('./genalgo-mutate.js');
    $gene.Sequence =    require('./genalgo-sequence.js');
    $gene.Organism =    require('./genalgo-organism.js');

$gene.availableFuncs = []; //list functions here
$gene.availableSymbols = [];  //these will be single characters, likely letters
$gene.bases = {};  //the codex for decoding sequecnes


debugger;







