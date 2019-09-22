new Vue({
    el: '#orderChaos',
    data: {
      tiles: {
        row0: [],
        row1: [],
        row2: [],
        row3: [],
        row4: [],
        row5: [],
        row6: [],
        row7: []
      },
      redTiles: {
        row0: [],
        row1: [],
        row2: [],
        row3: [],
        row4: [],
        row5: [],
        row6: [],
        row7: []
      },
      blueTiles: {
        row0: [],
        row1: [],
        row2: [],
        row3: [],
        row4: [],
        row5: [],
        row6: [],
        row7: []
      },
      tileColor: '#fff',
      remainingTiles: 64,
      winCondition: 'true,true,true,true,true'
    },
    methods: {
      selectColor: function(color){
        this.tileColor = color;
      },
      markTile: function(rowNumber, tileNumber){
        if(this.tileColor === '#fff'){
          alert('Select a color to mark tile');
        } else {

          if(!this.tiles[rowNumber][tileNumber]){

            this.tiles[rowNumber].splice(tileNumber, 1, true)
            if(this.tileColor === 'red'){
              this.redTiles[rowNumber].splice(tileNumber, 1, true)
            } else {
              this.blueTiles[rowNumber].splice(tileNumber, 1, true)
            }
            
            this.remainingTiles -= 1;
            
            this.endGame(rowNumber, tileNumber);
          } else{
            alert('Cannot mark an already marked tile');
          }
        }
      },
      endGame: function(rowNumber, tileNumber){
        if(!this.remainingTiles){
          alert('Chaos won');
          this.resetTiles();
        } else{

          if(this.tileColor === 'red'){
            if(this.redTiles[rowNumber].toString().includes(this.winCondition)){
              alert('Order won');
              this.resetTiles();
            } else {
              let redTilesVertical = [];
              for (let row in this.redTiles){
                redTilesVertical.push(this.redTiles[row][tileNumber]);
              }
              if(redTilesVertical.toString().includes(this.winCondition)){
                alert('Order won');
                this.resetTiles();
              }
            }
          } else {
            if(this.blueTiles[rowNumber].toString().includes(this.winCondition)){
              alert('Order won');
              this.resetTiles();
            } else {
              let blueTilesVertical = [];
              for (let row in this.redTiles){
                blueTilesVertical.push(this.blueTiles[row][tileNumber]);
              }
              if(blueTilesVertical.toString().includes(this.winCondition)){
                alert('Order won');
                this.resetTiles();
              }
            }
          }
          if(this.redTiles[rowNumber].toString().includes(this.winCondition) || this.blueTiles[rowNumber].toString().includes(this.winCondition)){
            alert('Order won');
            this.resetTiles();
          }


        }
      },
      resetTiles: function(){
        for (let row in this.tiles) {
          if (this.tiles.hasOwnProperty(row)) {
            this.tiles[row] = Array(8).fill(false);
          }
        }
        for (let row in this.redTiles) {
          if (this.redTiles.hasOwnProperty(row)) {
            this.redTiles[row] = Array(8).fill(false);
          }
        }
        for (let row in this.blueTiles) {
          if (this.blueTiles.hasOwnProperty(row)) {
            this.blueTiles[row] = Array(8).fill(false);
          }
        }
        this.tileColor = '#fff';
        this.remainingTiles = 64;
      }
    },
    created: function () {
      this.resetTiles();
    }
  });