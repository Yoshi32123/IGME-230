const lifeworld = {

    init(numCols,numRows){
        this.numCols = numCols,
        this.numRows = numRows,
        this.world = this.buildArray();
        this.worldBuffer = this.buildArray();
        this.randomSetup();
    },

    buildArray(){
        let outerArray = [];
        for(let row = 0; row < this.numRows; row++){
            let innerArray = [];
            for( let col = 0; col < this.numCols; col++){
                innerArray.push(0);
            }
            outerArray.push(innerArray);
        }
        return outerArray;
    },

    randomSetup(){
        for (let row = 0; row < this.numRows; row++){
            for (let col = 0; col < this.numCols; col++){
                this.world[row][col] = 0;
                if (Math.random() < .1){
                    this.world[row][col] = 1;
                }
            }
        }
    },

    getLivingNeighbors(row, col){
        // TODO:
        // row and col should > than 0, if not return 0
        if (!(row > 0 && col > 0)){
            return 0;
        }

        // row and col should be < the length of the applicable array, minus 1. If not return 0
        if (!(row < numRows - 1 && col < numCols - 1)){
            return 0;
        }

        // count up how many neighbors are alive at N,NE,E,SE,S,SW,W,SE
        let sum = 0;
        // matrix
        // [NW][N][NE]
        //  [W][.][E]
        // [SW][S][SE]
        
        // cell info:
        if (this.world[row-1][col] == 1){sum++;}    // N
        if (this.world[row+1][col] == 1){sum++;}    // S
        if (this.world[row][col+1] == 1){sum++;}    // E
        if (this.world[row][col-1] == 1){sum++;}    // W

        if (this.world[row-1][col-1] == 1){sum++;}  // NW
        if (this.world[row-1][col+1] == 1){sum++;}  // NE
        if (this.world[row+1][col-1] == 1){sum++;}  // SW
        if (this.world[row+1][col+1] == 1){sum++;}  // SE

        // return that sum
        return sum;
    },

    step(){
        // TODO:
        // nested for loop will call getLiving Neighbors() on each cell in this.world
        this.worldBuffer= this.buildArray();

        for (let row = 0; row < this.numRows; row++){
            for (let col = 0; col < this.numCols; col++){
                let sum = this.getLivingNeighbors(row, col);

                // Determine if that cell in the next generation should be alive (see wiki life page)
                // Put a 1 or zero into the right location in this.worldBuffer
                if (this.world[row][col] == 1){
                    if (sum == 2 || sum == 3){
                        // dies
                        this.worldBuffer[row][col] = 1;
                    }
                    else if (sum < 2){
                        // lives
                        this.worldBuffer[row][col] = 0;
                    }
                    else if (sum > 3){
                        // dies
                        this.worldBuffer[row][col] = 0;
                    }
                }
                else{
                    if (sum == 3){
                        // becomes alive
                        this.worldBuffer[row][col] = 1;
                    }
                }
            }
        }

        // when the looping is done, swap .world and .worldBuffer (use a temp variable to do so)
        this.world = this.worldBuffer;
    }

} // end lifeworld literal